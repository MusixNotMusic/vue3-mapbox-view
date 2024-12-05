<template>
    <el-color :modelValue="value" show-alpha  @change="$emit('update:value', $event.target.value)"></el-color>
</template>
<script>
export default {
    name: 'Color',
    props: {
        value: {
            require: true
        }
    }
}
</script>