<template>
    <div class="tiles">
        <div class="url" v-for="(url, index) in input" :key="index">
            <Url v-model="input[index]" @change="change">
                <template #index><span>{{index + 1}}</span></template>
            </Url>
        </div>
    </div>
</template>
<script>
import { shallowRef, watch } from "vue";
import Url from './Url.vue'
export default {
    name: 'Tiles',
    emits: ['change', 'update:modelValue'],
    components: { Url },
    props: {
        modelValue : {
            type: Array,
            require: true
        }
    },
    setup (props, { emit }) {
        // props.modelValue.push(props.modelValue[0])
        const input = shallowRef(props.modelValue);

        watch(() => props.modelValue, (val, old) => {
            if (val !== old) {
                input.value = val;
            }
        }, { deep: true });

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

<style lang="scss" scoped>
.tiles {
    width: 100%;
}
</style>