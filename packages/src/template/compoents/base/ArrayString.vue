<template>
    <div class="array-string-wrap">
        <el-input class="item" v-for="(item, index) in input" :key="index" v-model="input[index]" @change="change"></el-input>
    </div>
</template>
<script>
import { shallowRef, watch } from "vue";
export default {
    name: 'ArrayString',
    emits: ['change'],
    props: {
        modelValue : {
            type: Array,
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
            emit("change", change);
        }

        return {
            input,
            change
        }
    }
}
</script>

<style scoped lang="scss">
.array-string-wrap {
    display: flex;
    column-gap: 5px;
    row-gap: 5px;
    align-items: center;
    flex-wrap: wrap;
    .item {
        min-width: 80px;
        flex: 1;
    }
}
</style>