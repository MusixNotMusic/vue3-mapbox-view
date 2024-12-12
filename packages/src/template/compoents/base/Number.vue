<template>
    <el-input-number v-model="input" style="width: 120px" :step="0.1" :min="0" @change="change"></el-input-number>
</template>
<script>
import { shallowRef, watch } from "vue";
export default {
    name: 'Number',
    emits: ['change', 'update:modelValue'],
    props: {
        modelValue : {
            type: Number,
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