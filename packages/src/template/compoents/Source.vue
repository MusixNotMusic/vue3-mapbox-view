<template>
  <div class="mp-layer-source" :style="customStyle">
    <div class="mp-layer-content">
      <span class="tag">数据源</span>
      <div class="mp-key-value" v-for="(value, key, index) in sourceRef" :key="index">
        <label for="">
            <span>{{key}}</span>
            <div class="line" v-if="key === 'type'"></div>
            <span v-if="key === 'type'" 
              class="mb-icon icon"
              :class="['icon-' + value.value ]" 
              :title="value.value"></span>
        </label>
     
        <template v-if="value.component">
          <component :is="value.component" v-model="value.value" :list="value.list"></component>
        </template>
      </div>
    </div>
  </div>
</template>

<script >
import { reactive, watch, onMounted, onUnmounted, markRaw } from "vue";
import { sources as TemplateSource } from '../source'
import { cloneDeep } from 'lodash'

export default {
  name: "Layer",
  components: {},
  props: {
    customStyle: {
      type: Object
    },
    inputSource: {
      require: true
    }
  },
  setup(props, { emit }) {
    const sourceRef = reactive({});
    
    watch(() => props.inputSource, (val, old) => {
      if (val !== old) {
        updateSource();
      }
    })

    const transform = (template, origin, target) => {
      template = cloneDeep(template);
      template = template[origin.type];
      Object.entries(template).forEach(([key, value]) => {
        if (value.constructor instanceof Function ) {
          template[key] = new value();

          if(origin[key]) {
            if (template[key] && template[key].setValue) {
              template[key].setValue(origin[key]);
            }
            target[key] = template[key];
          }
        }
      })
    }

    const initSource = () => {
      transform(TemplateSource, props.inputSource, sourceRef);
    }

    const updateSource = () => {

    }

    onMounted(() => {
      initSource();
    });

    onUnmounted(() => {
      
    })

    return {
      sourceRef
    };
  },
};
</script>

<style lang="scss" scoped>

.mp-layer-source {
  margin: 10px;
  .mp-layer-content {
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
      background: rgb(18, 57, 187);;
      border-top-right-radius: 4px;
      padding: 1px 2px;
      transform-origin: top right;
      transform: scale(0.8);
    }
  }
  .mp-key-value {
    margin-left: 20px;
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
