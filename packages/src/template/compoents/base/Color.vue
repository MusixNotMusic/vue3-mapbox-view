<template>
    <el-color-picker v-model="input" show-alpha  @change="change"></el-color-picker>
</template>
<script>
import { shallowRef, watch } from "vue";
export default {
    name: 'Color',
    emits: ['change', 'update:modelValue'],
    props: {
        modelValue : {
            type: String,
            require: true
        }
    },
    setup (props, { emit }) {
        const input = shallowRef(props.modelValue);

        watch(() => props.modelValue, (val, old) => {
            if (val !== old) {
                input.value = val;
            }
        });

        const change = () => {
            emit("update:modelValue", input.value);
            emit("change");
        }

        return {
            input,
            change
        }
    }
}
</script>