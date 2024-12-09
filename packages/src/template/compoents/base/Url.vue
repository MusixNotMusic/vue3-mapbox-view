<template>
    <div class="url">
        <div class="index">
            <slot name="index"></slot>
        </div>
        <el-icon class="icon" @click="open = !open" :class="{active: open}"><ArrowRight /></el-icon>
        <el-input v-model="input"
            v-show="!isFocus" 
            @change="change" 
            style="width: calc(100% - 20px)" 
            @focus="focusHandle">
        </el-input>
        <el-input v-model="input" 
            ref="textareaRef"
            v-show="isFocus"
            :rows="4"
            autosize
            type="textarea"
            style="width: calc(100% - 20px)" 
            @blur="isFocus = false">
        </el-input>
        <div class="transition-height" :class="{open: open}">
            <div class="search-params-wrap" @mouseleave="focusIndex = -1">
                <div class="item" v-for="(item, index) in params" :key="index" @mousemove="focusIndex = index">
                    <el-input v-model="item.key" @input="seachParamsChange(item)"></el-input>
                    <el-input v-model="item.value" @input="seachParamsChange(item)"></el-input>
                    <!-- <el-icon v-if="focusIndex === index"><DeleteFilled/></el-icon> -->
                    <el-icon class="icon" 
                        v-if="focusIndex === index"
                        size="16" 
                        color="#333" 
                        title="删除" @click="deleteItemHandle(index)"><Delete/></el-icon>
                </div>

                <div class="item">
                    <el-input v-model="addItem.key" @change="addItemChangeHandle(item)" autofocus placeholder="Key"></el-input>
                    <el-input v-model="addItem.value" @change="addItemChangeHandle(item)" autofocus placeholder="Value"></el-input>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { shallowRef, ref, watch, computed } from "vue";
import { ArrowRight, Delete } from '@element-plus/icons-vue'
export default {
    name: 'Url',
    components: { ArrowRight, Delete },
    props: {
        modelValue : {
            type: String,
            require: true
        }
    },
    setup (props, { emit }) {
        // const input = ref(props.modelValue);
        const domain = ref('');
        const params = ref([]);
        const activeNames = ref([]);
        const open = ref(false);

        const focusIndex = ref(-1);
        const isFocus = ref(false);
        const textareaRef = ref(null);

        const addItem = ref({ value: '', key: '' })

        const urlA2S = (arr) => {
            const obj = {};
            arr.forEach((item) => {
                obj[item.key] = item.value;
            })
            return new URLSearchParams(obj).toString();
        }

        const urlS2A = (str) => {
            const usp = new URLSearchParams(str)
            const list = [];
            for(let i of usp) {
                list.push({key: i[0], value: i[1]})
            }
            return list;
        }
        
        const initSearchParams = (url) => {
            const index = url.indexOf('?');
            if (index >= 0) {
                domain.value = url.slice(0, index + 1);
                params.value = urlS2A(url.slice(index + 1));
            } else {
                domain.value = url;
                params.value = [];
            }
        }

        initSearchParams(props.modelValue);


        const input = computed({
            get() {
                return domain.value + urlA2S(params.value);
            },
            set(val, old) {
                if (val !== old) {
                    initSearchParams(val);
                }
            }
        })

        watch(() => props.modelValue, (val, old) => {
            if (val !== old) {
                initSearchParams(val);
            }
        });

        const change = () => {
            emit("update:modelValue", input.value);
            emit("change", input.value);
        }

        const seachParamsChange = (item) => {
            console.log(item);
            emit("update:modelValue", input.value);
            emit("change", input.value);
        }

        const focusHandle = () => {
            isFocus.value = true;
            setTimeout(() => {
                if (textareaRef.value) {
                    textareaRef.value.focus();
                }
            })
        }

        const deleteItemHandle = (index) => {
            console.log('deleteItemHandle');
            if (index >= 0) {
                params.value.splice(index, 1);
            }
        }

        const addItemChangeHandle = () => {
            if (addItem.value && (addItem.value.value !== '' || addItem.value.key !== '')) {
                params.value.push(addItem.value);
                addItem.value = { value: '', key: '' }
            }
        }

        return {
            open,
            input,
            params,
            focusIndex,
            isFocus,
            textareaRef,
            change,
            seachParamsChange,
            activeNames,
            focusHandle,
            deleteItemHandle,
            addItem,
            addItemChangeHandle,
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
    width: 100%;

    min-height: 0;
    .item {
        display: flex;
        column-gap: 5px;
        position: relative;
        align-items: center;
        width: calc(100% - 30px);
    }
    .icon {
        position: absolute;
        top: 6px;
        right: 2px;
        padding: 2px;
        box-sizing: content-box;
    }
    .icon:hover {
        background: #ccc;
        border-radius: 4px;
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