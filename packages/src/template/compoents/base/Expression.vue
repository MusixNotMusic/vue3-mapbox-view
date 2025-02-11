<template>
    <!-- <el-input v-model="input" type="textarea" autosize style="width: 500px" @change="change"></el-input> -->
    <Codemirror
        v-model:value="input"
        :options="option"
        placeholder="test placeholder"
        :style="styles"
        @change="change"
  />
</template>
<script>
import { ref, watch } from "vue";
import Codemirror from "codemirror-editor-vue3";
// language
import "codemirror/mode/javascript/javascript.js";
import "codemirror/addon/display/placeholder.js";

import jsonlint from "jsonlint-mod-fixed";

import "codemirror/addon/lint/lint.css";
import "codemirror/addon/lint/lint.js";
import "codemirror/addon/lint/json-lint";

window.jsonlint = jsonlint;

export default {
    name: 'Expression',
    components: {
        Codemirror
    },
    emits: ['change', 'update:modelValue'],
    props: {
        modelValue : {
            type: Object,
            require: true
        }
    },
    setup (props, { emit }) {
        let input;
        let option;
        let styles;

        const init = (value) => {
            const text = JSON.stringify(value);
            const isLimit = text.length > 60;
            input = ref(isLimit ? JSON.stringify(props.modelValue, null, 2) : text);

            styles = isLimit ? { 'line-height': '20px', width: '80%', height: '300px', 'margin-bottom': '10px' } : { 'line-height': '32px' , width: '500px' }
            if (isLimit) {
                option = ref({
                    mode: "application/json", // Language mode
                    theme: 'default',
                    lineNumbers: true,
                    lineWiseCopyCut: true,
                    gutters: ["CodeMirror-lint-markers"],
                    lint: true,
                });
            } else {
                option = ref({
                    mode: "application/json", // Language mode
                    theme: 'default',
                    lineNumbers: false,
                    gutters: ["CodeMirror-lint-markers"],
                    lint: true,
                });
            }
        }

        init(props.modelValue);

        watch(() => props.modelValue, (val, old) => {
            if (val !== old) {
                // init(val)
            }
        });

        const change = () => {
            let obj = null;
            try{
                obj = JSON.parse(input.value);
                emit("update:modelValue", obj);
                emit("change");
                console.log('object=>', obj)
            } catch(e) {
                console.warn('e =>', e);
            }
        }

        return {
            input,
            change,
            option,
            styles
        }
    }
}
</script>
<style scoped>
:v-deep(.codemirror-container)
{
  line-height: 20px !important;
}
:deep(.CodeMirror-lines) {
    padding: 0px
}
</style>