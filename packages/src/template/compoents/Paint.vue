<template>
  <div class="mp-layer-paint-style" :style="customStyle">
    <div class="mp-layer-paint-content">
      <span class="tag">paint</span>
      <div class="mp-key-value" v-for="(value, key, index) in inputPaint" :key="index">
        <label for="">
            <span>{{key}}</span>
            <!-- <div class="line" v-if="key === 'type'"></div>
            <span v-if="key === 'type'" 
              class="mb-icon icon"
              :class="['icon-' + value.value ]" 
              :title="value.value"></span> -->
        </label>
     
        <template v-if="value.component">
          <component :is="value.component" v-model="value.value"></component>
        </template>
      </div>
    </div>
  </div>
</template>

<script >
import { reactive, watch, onMounted, onUnmounted, toRaw } from "vue";
import { TemplateLayer, styles } from '../layer'

export default {
  name: "Paint",
  components: {},
  props: {
    inputPaint: {
      require: true
    }
  },
  setup(props, { emit }) {

    onMounted(() => {
    });

    onUnmounted(() => {
      
    })

    return {
      layerEntries,
    };
  },
};
</script>

<style lang="scss" scoped>

.mp-layer-paint-style {
  margin: 10px;
  .mp-layer-paint-content {
    width: 100%;
    border: 1px solid #ccc;
    border-radius: 5px;
    box-sizing: content-box;
    position: relative;
    padding: 20px 0px;
    display: flex;
    flex-direction: column;
    row-gap: 5px;
    .tag {
      display: inline-block;
      position: absolute;
      top: 0px;
      right: 0px;
      font-size: 12px;
      color: #fff;
      background: rgb(226, 59, 59);
      border-top-right-radius: 4px;
      padding: 1px 2px;
    }
  }
  .mp-key-value {
    margin-left: 20px;
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
