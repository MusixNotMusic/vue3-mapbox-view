<template>
    <el-switch v-model="input"  @change="change"></el-switch>
</template>
<script>
import { shallowRef, watch } from "vue";
export default {
    name: 'Boolean',
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
        }

        return {
            input,
            change
        }
    }
}
</script>