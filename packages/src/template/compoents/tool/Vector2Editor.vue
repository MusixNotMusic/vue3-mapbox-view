<template>
    <div class="vector2">
        <div class="text">
            <el-icon class="icon" @click="showPanel = !showPanel">
                <CopyDocument/>
                <Vector2Panel v-model="input" v-model:open="showPanel"></Vector2Panel>
            </el-icon>
            <span class="point">{{ input[0] }}, {{ input[1] }}</span>
        </div>
    </div>
</template>
<script>
import { onMounted, ref, watch } from "vue";
import {CopyDocument} from '@element-plus/icons-vue';

import Vector2Panel from './Vector2Panel.vue'

export default {
    name: 'Vector2E',
    components: { CopyDocument, Vector2Panel },
    emits: ['change', 'update:modelValue'],
    props: {
        modelValue : {
            type: Array,
            require: true
        }
    },
    setup (props, { emit }) {
        const input = ref(props.modelValue);
        const showPanel = ref(false);

        watch(() => props.modelValue, (val, old) => {
            if (val !== old) {
                input.value = val;
            }
        });

        const change = () => {
            emit("update:modelValue", input.value);
            emit("change");
        }

        onMounted(() => {
        })

        return {
            input,
            change,
            showPanel
        }
    }
}
</script>
<style scoped>
.vector2 {
    height: 32px;
}

.panel {
    border: 1px solid #9E9E9E;
    border-radius: 3px;
}
.icon {
    font-size: 14px;
    color: purple;
    cursor: pointer;
    position: relative;
    z-index: 10;
}
.icon:hover {
    background: #ccc;
}

.text {
    display: flex;
    align-items: center;
    column-gap: 10px;
}
.point {
    font-size: 12px;
    height: 32px;
    line-height: 32px;
}
</style>