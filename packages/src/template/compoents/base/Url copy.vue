<template>
    <div class="url">
        <div class="index">
            <slot name="index"></slot>
        </div>
        <el-icon class="icon" @click="open = !open" :class="{active: open}"><ArrowRight /></el-icon>
        <el-input v-model="input" @change="change" style="width: calc(100% - 20px)"></el-input>
        <div class="transition-height" :class="{open: open}">
            <div class="search-params-wrap">
                <div class="item" v-for="(item, index) in params" :key="index">
                    <el-input v-model="item.key" @change="seachParamsChange"></el-input>
                    <el-input v-model="item.value" @change="seachParamsChange"></el-input>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { shallowRef, ref, watch, computed } from "vue";
import { ArrowRight } from '@element-plus/icons-vue'
export default {
    name: 'Url',
    components: { ArrowRight },
    props: {
        modelValue : {
            type: String,
            require: true
        }
    },
    setup (props, { emit }) {
        const input = ref(props.modelValue);
        const domain = ref('');
        const params = ref([]);
        const activeNames = ref([]);
        const open = ref(false);
        
        const initSearch = () => {
            const index = props.modelValue.indexOf('?');
            domain.value = props.modelValue.slice(0, index + 1);
            const searchParams = new URLSearchParams(props.modelValue.slice(index + 1));
            for(let i of searchParams) {
                params.value.push({key: i[0], value: i[1]})
            }
        }
        
        initSearch();

        watch(() => props.modelValue, (val, old) => {
            if (val !== old) {
                initSearch();
            }
        });

        const change = () => {
            emit("update:modelValue", input.value);
            emit("change", input.value )
        }

        const seachParamsChange = () => {
            const searchParams = new URLSearchParams(params.value.map(item => ({[item.key]: item.value})));
            input.value = domain.value + searchParams.toString();
            emit("update:modelValue", input.value);
            emit("change", input.value );
        }

        return {
            open,
            input,
            params,
            change,
            seachParamsChange,
            activeNames
        }
    }
}
</script>

<style lang="scss" scope>
.url {
    position: relative;
    .icon {
        position: absolute;
        top: 12px;
        right: 5px;
        font-size: 12px;
        cursor: pointer;
        transition: 0.5s;
    }

    .active {
        transform: rotate(90deg);
        max-height: 100%;
    }
}
.search-params-wrap {
    margin-top: 5px;
    display: flex;
    flex-direction: column;
    row-gap: 5px;
    width: 90%;

    min-height: 0;
    .item {
        display: flex;
        column-gap: 5px;
    }
    .item:last-child {
        margin-bottom: 5px;
    }
}

.transition-height {
    display: grid;
    grid-template-rows: 0fr;
    transition: 0.5s;
    overflow: hidden;
}

.open {
    grid-template-rows: 1fr;
}

.index {
    position: absolute;
    z-index: 2;
    top: 0px;
    left: 0px;
    transform-origin: top left;
    transform: scale(0.7);
    color: #1d21df;
    background: #eee;
    border-top-left-radius: 5px;;
}

</style>