<template>
    <div class="undefine">unknow</div>
</template>
<script>
import { shallowRef, watch } from "vue";
export default {
    name: 'Boolean',
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
<style scoped lang="scss">
.undefine {
    width: max-content;
    height: 32px;
    line-height: 32px;
    padding: 0px 5px;
    background: rgb(156, 152, 152);
    color: #fff;
    border-radius: 4px;
}
</style>