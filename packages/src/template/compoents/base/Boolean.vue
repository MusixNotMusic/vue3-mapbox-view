<template>
    <el-switch v-model="value"  @change="change"></el-switch>
</template>
<script>
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