<template>
    <div class="bounds">
        <div class="min-x"></div>
        <div class="max-x"></div>
        <div class="min-y"></div>
        <div class="max-y"></div>
        <div class="container">
            <div class="coord-point b-l">
                <el-input class="p" v-model="input[0]" @change="change" size="small"></el-input>
                <span>°</span>
            </div>

            <div class="coord-point r-b">
                <el-input class="p" v-model="input[1]" @change="change" size="small"></el-input>
                <span>°</span>
            </div>

            <div class="coord-point b-r">
                <el-input class="p" v-model="input[2]" @change="change" size="small"></el-input>
                <span>°</span>
            </div>

            <div class="coord-point r-t">
                <el-input class="p" v-model="input[3]" @change="change" size="small"></el-input>
                <span>°</span>
            </div>

            <div class="t-l">
                <span>minX</span>
            </div>
            <div class="t-r">
                <span>maxX</span>
            </div>
            <div class="l-t">
                <span>maxY</span>
            </div>
            <div class="l-b">
                <span>minY</span>
            </div>
        </div>
    </div>
</template>
<script>
import { shallowRef, watch } from "vue";
export default {
    name: 'Bounds',
    emits: ['change', 'update:modelValue'],
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
$padding: 20px;
$width: 80px;
$height: 80px;
.bounds {
    position: relative;
    margin: 30px;
    .container {
        padding: $padding;
        width: $width;
        height: $height;
        position: relative;
    }
    .coord-point {
        width: max-content;
        display: flex;
    }
    .p {
        width: 40px;
    }
    .r-t {
        position: absolute;
        transform: translate(101%, -50%);
        top: $padding;
        right: 0;
    }

    .r-b {
        position: absolute;
        transform: translate(101%, 50%);
        bottom: $padding;
        right: 0;
    }

    .l-t {
        position: absolute;
        transform: translate(-101%, -50%);
        top: $padding;
        left: 0;
    }

    .l-b {
        position: absolute;
        transform: translate(-101%, 50%);
        bottom: $padding;
        left: 0;
    }

    .b-l {
        position: absolute;
        transform: translate(-50%, 102%);
        bottom: 0;
        left: $padding;
    }

    .b-r {
        position: absolute;
        transform: translate(50%, 102%);
        bottom: 0;
        right: $padding;
    }


    .t-l {
        position: absolute;
        transform: translate(-50%, -101%);
        top: 0;
        left: $padding;
    }

    .t-r {
        position: absolute;
        transform: translate(50%, -101%);
        top: 0;
        right: $padding;
    }

    .min-x {
        position: absolute;
        left: $padding;
        width: 1px;
        height: 100%;
        background: #ccc;
    }

    .max-x {
        position: absolute;
        right: $padding;
        width: 1px;
        height: 100%;
        background: #ccc;
    }

    .max-y {
        position: absolute;
        top: $padding;
        height: 1px;
        width: 100%;
        background: #ccc;
    }

    .min-y {
        position: absolute;
        bottom: $padding;
        height: 1px;
        width: 100%;
        background: #ccc;
    }
}
</style>