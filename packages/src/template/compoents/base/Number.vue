<template>
    <el-input-number v-model="input" style="width: 120px" @change="change"></el-input-number>
</template>
<script>
import { shallowRef, watch } from "vue";
export default {
    name: 'Number',
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