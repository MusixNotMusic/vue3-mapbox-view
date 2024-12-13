<template>
  <div class="mp-layer-style" :style="customStyle">
    <div class="mp-layer-content">
      <span class="tag-t-l">图层</span>
      <div class="mp-key-value" v-for="(value, key, index) in layerRef.default" :key="index">
        <label for="">
            <span>{{key}}</span>
            <div class="line" v-if="key === 'type'"></div>
            <span v-if="key === 'type'" 
              class="mb-icon icon"
              :class="['icon-' + value.value ]" 
              :title="value.value"></span>
        </label>
     
        <template v-if="value.component">
          <component :is="value.component" v-model="value.value" :list="value.list" :layerId="layerRef.default.id" :mapIns="mapIns" @change="change(key, value)"></component>
        </template>
      </div>

      <span class="tag-b-r"  @click="showMore = !showMore">more</span>
      <AutoHeight v-model="showMore">
        <template #content>
          <div class="mp-layer-content-other">
            <div class="split-line"><span>更多配置</span></div>
            <span class="tag-t-r" v-if="showMore" @click="showMore = !showMore">more</span>
            <div class="mp-key-value" v-for="(value, key, index) in layerRef.other" :key="index">
              <label>
                  <span>{{key}}</span>
                  <div class="line" v-if="key === 'type'"></div>
                  <span v-if="key === 'type'" 
                    class="mb-icon icon"
                    :class="['icon-' + value.value ]" 
                    :title="value.value"></span>
              </label>
          
              <template v-if="value && value.component">
                <component :is="value.component" v-model="value.value" :list="value.list" @change="change(key, value)"></component>
              </template>
            </div>
          </div>
        </template>
      </AutoHeight>
    </div>
  </div>
</template>

<script >
import { reactive, watch, onMounted, onUnmounted, ref } from "vue";
import { TemplateLayer, styles } from '../layer'
import { cloneDeep } from 'lodash';
import AutoHeight from './transition/AutoHeight.vue';
import { LayoutType, PaintType } from '../types/types';

export default {
  name: "Layer",
  components: { AutoHeight },
  emits: ['change', 'update:modelValue'],
  props: {
    customStyle: {
      type: Object
    },
    inputLayer: {
      require: true
    },
    mapIns: {
      type: Object
    }
  },
  setup(props, { emit }) {
    const layerRef = reactive({ default: {}, other: {}, custom: {} });
    const layoutRef = reactive({ default: {}, other: {}, custom: {} });
    const paintRef = reactive({ default: {}, other: {}, custom: {} });

    const showMore = ref(null);
    
    watch(() => props.inputLayer, (val, old) => {
      if (val !== old) {
        updateLayer();
      }
    })

    const transform = (template, origin, target) => {
      template = cloneDeep(template);
      Object.entries(template).forEach(([key, value]) => {
        if (value.constructor instanceof Function ) {
          try {
            template[key] = new value();

            if(origin[key]) {
              if (template[key] && template[key].setValue) {
                template[key].setValue(origin[key]);
              }
              target.default[key] = template[key];
            } else {
              target.other[key] = template[key];
            }
          } catch(e) {
            console.error('Transform error ==>', e);
          }
        }
      })
    }

    const initLayer = () => {

      if(!props.inputLayer.layout) {
        props.inputLayer.layout = {}
      }

      if(!props.inputLayer.paint) {
        props.inputLayer.paint = {}
      }

      transform(TemplateLayer, props.inputLayer, layerRef);

      initLayoutPaint();

      layerRef.default.layout.setValue(layoutRef);
    
      layerRef.default.paint.setValue(paintRef);
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


      if (layout) {
        transform(LayoutTemplate, layout, layoutRef);
      }

      if (paint) {
        transform(PaintTemplate, paint, paintRef);
      }
    }


    const change = (key, value) => {
      if (key && value) {
        if (props.mapIns) {
          console.log('change ==>', key, value);
          const layer = props.mapIns.getLayer(props.inputLayer.id);
          if (layer) {
            layer[key] = value.value;
            props.mapIns.triggerRepaint();
            emit('change');
          }
        }
      } 
    }


    onMounted(() => {
      initLayer();
    });

    onUnmounted(() => {
      
    })

    return {
      layerRef,
      showMore,
      change
    };
  },
};
</script>

<style lang="scss" scoped>
@use '../style.scss';
.mp-layer-style {
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
