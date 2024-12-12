<template>
  <div class="mp-layer-custom" :style="customStyle">
    <div class="mp-layer-content">
      <span class="tag-t-l">自定义</span>
      <div class="mp-key-value" v-for="(value, key, index) in input" :key="index">
        <label for="">
            <span>{{key}}</span>
        </label>
        <template v-if="value.component">
          <component :is="value.component" v-model="value.value" :list="value.list" @change="change(key, value)"></component>
        </template>
      </div>
    </div>
  </div>
</template>

<script >
import { watch, ref } from "vue";


export default {
  name: "Custom",
  components: { },
  emits: ['change', 'update:modelValue'],
  props: {
    customStyle: {
      type: Object
    },
    modelValue : {
      type: Boolean,
      require: true
    }
  },
  setup(props, { emit }) {

    const input = ref(props.modelValue);
    
    watch(() => props.modelValue, (val, old) => {
      if (val !== old) {
        input.value = val;
      }
    })

    const change = () => {
        emit("update:modelValue", input.value);
        emit("change");
    }
 
    return {
      input,
      change
    };
  },
};
</script>

<style lang="scss" scoped>
@use '../style.scss';
.mp-layer-custom {
  margin: 10px;
  .mp-layer-content {
    width: 100%;
    border: 1px solid #ccc;
    border-radius: 5px;
    box-sizing: content-box;
    position: relative;
    padding: 20px 0px;
    // display: flex;
    // flex-direction: column;
    // row-gap: 5px;

    .tag {
      display: inline-block;
      position: absolute;
      top: 0px;
      right: 0px;
      font-size: 12px;
      color: #fff;
      background: rgb(18, 57, 187);;
      border-top-right-radius: 4px;
      padding: 1px 2px;
      transform-origin: top right;
      transform: scale(0.8);
    }
  }

  .mp-layer-content-other {
    width: 100%;
    border-radius: 5px;
    box-sizing: content-box;
    position: relative;
  }
  
  .mp-key-value {
    margin-left: 20px;
    margin-bottom: 5px;
    display: flex;
    column-gap: 5px;
    margin-top: 3px;
    label {
      display: flex;
      justify-content: space-between;
      font-size: 12px;
      background: #ccc;
      height: 32px;
      line-height: 32px;
      padding-left:10px;
      padding-right:5px;
      min-width: 60px;
      border-top-left-radius: 5px;
      border-bottom-left-radius: 5px;
      .icon {
        font-size: 14px;
      }

      .line {
        height: 32px;
        width: 2px;
        background: #fff;
      }
    }
  }
}
</style>
