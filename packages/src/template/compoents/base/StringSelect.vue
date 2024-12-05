<template>
    <el-select v-model="input" style="width: 200px" @change="change">
        <el-option v-for="(item, index) in list" :key="index" :label="item" :value="item"></el-option>
    </el-select>
</template>
<script>
import { shallowRef, watch } from "vue";
export default {
    name: 'String',
    props: {
        modelValue : {
            type: String,
            require: true
        },
        list: {
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