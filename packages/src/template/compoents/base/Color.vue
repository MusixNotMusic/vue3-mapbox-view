<template>
    <el-color-picker v-model="input" show-alpha  @change="change"></el-color-picker>
</template>
<script>
import { shallowRef, watch } from "vue";
export default {
    name: 'Color',
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
        }

        return {
            input,
            change
        }
    }
}
</script>