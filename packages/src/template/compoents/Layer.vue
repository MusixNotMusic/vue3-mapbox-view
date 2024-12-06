<template>
  <div class="mp-layer-style" :style="customStyle">
    <div class="mp-layer-content">
      <span class="tag">图层</span>
      <div class="mp-key-value" v-for="(value, key, index) in layerRef" :key="index">
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
import { reactive, watch, onMounted, onUnmounted, toRaw } from "vue";
import { TemplateLayer, styles } from '../layer'
import { cloneDeep } from 'lodash'

export default {
  name: "Layer",
  components: {},
  props: {
    inputLayer: {
      require: true
    }
  },
  setup(props, { emit }) {
    const layerRef = reactive({});
    const layoutRef = reactive({});
    const paintRef = reactive({});
    
    watch(() => props.inputLayer, (val, old) => {
      if (val !== old) {
        updateLayer();
      }
    })

    const transform = (template, origin, target) => {
      template = cloneDeep(template);
      Object.entries(template).forEach(([key, value]) => {
        if (value.constructor instanceof Function ) {
          console.log('value ==>', value);
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

    const initLayer = () => {
      transform(TemplateLayer, props.inputLayer, layerRef);

      initLayoutPaint();

      layerRef.layout.setValue(layoutRef);
      layerRef.paint.setValue(paintRef);

      console.log('layerRef', layerRef)
    }

    const updateLayer = () => {

    }

    const initLayoutPaint = () => {
      const type = props.inputLayer.type;
      const StyleTmeplate = styles[type];

      const LayoutTemplate = StyleTmeplate.layout;
      const PaintTemplate  = StyleTmeplate.paint;

      let layout = props.inputLayer.layout;
      let paint  = props.inputLayer.paint;

      transform(LayoutTemplate, layout, layoutRef);
      transform(PaintTemplate, paint, paintRef);
    }


    onMounted(() => {
      initLayer();
    });

    onUnmounted(() => {
      
    })

    return {
      layerRef,
    };
  },
};
</script>

<style lang="scss" scoped>

.mp-layer-style {
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
