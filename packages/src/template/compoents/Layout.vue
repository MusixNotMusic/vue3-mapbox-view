<template>
  <div class="mp-layer-paint-layout-style" :style="customStyle">
    <div class="mp-layer-paint-layout-content">
      <span class="tag">layout</span>
      <div class="mp-key-value" v-for="(value, key, index) in inputLayout" :key="index">
        <label for="">
            <span>{{key}}</span>
            <!-- <div class="line" v-if="key === 'type'"></div>
            <span v-if="key === 'type'" 
              class="mb-icon icon"
              :class="['icon-' + value.value ]" 
              :title="value.value"></span> -->
        </label>
     
        <template v-if="value.component">
          <component :is="value.component" v-model="value.value" :list="value.list"></component>
        </template>
      </div>
    </div>
  </div>
</template>

<script >
import { ref, onMounted, onUnmounted } from "vue";

export default {
  name: "Layout",
  components: {},
  props: {
    modelValue: {
      require: true
    }
  },
  setup(props, { emit }) {

    const inputLayout = ref(props.modelValue);

    onMounted(() => {
    });

    onUnmounted(() => {
      
    })

    return {
      inputLayout
    };
  },
};
</script>

<style lang="scss" scoped>

.mp-layer-paint-layout-style {
  width: -webkit-fill-available;
  margin: 0 10px 10px 0px;
  .mp-layer-paint-layout-content {
    width: 100%;
    border: 1px solid #ccc;
    border-radius: 5px;
    box-sizing: content-box;
    position: relative;
    padding: 10px 0px;
    display: flex;
    flex-direction: column;
    row-gap: 5px;
    min-height: 10px;
    .tag {
      display: inline-block;
      position: absolute;
      top: 0px;
      right: 0px;
      font-size: 12px;
      color: #fff;
      background: rgb(87, 78, 224);
      border-top-right-radius: 4px;
      padding: 1px 2px;
    }
  }
  .mp-key-value {
    margin-left: 10px;
    height: 32px;
    display: flex;
    column-gap: 5px;
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
