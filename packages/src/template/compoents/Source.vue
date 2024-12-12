<template>
  <div class="mp-layer-source" :style="customStyle">
    <div class="mp-layer-default-content">
      <span class="tag-t-l">数据源</span>
      <div class="mp-key-value" v-for="(value, key, index) in sourceRef.default" :key="index">
        <label for="">
            <span>{{key}}</span>
            <div class="line" v-if="key === 'type'"></div>
            <span v-if="key === 'type'" 
              class="mb-icon icon"
              :class="['icon-' + value.value ]" 
              :title="value.value"></span>
        </label>
     
        <template v-if="value.component">
          <component :is="value.component" v-model="value.value" :list="value.list" @change="change(key, value)"></component>
        </template>
      </div>

      <span class="tag-b-r" @click="showMore = !showMore">more</span>
      <div class="transition-height" :class="{open: showMore}" >
          <div class="mp-layer-other-content transition-height-container">
            <div class="split-line"><span>更多配置</span></div>
            <div class="mp-key-value" v-for="(value, key, index) in sourceRef.other" :key="index">
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
      </div>
    </div>
  </div>
</template>

<script >
import {  ref, watch, onMounted, onUnmounted, reactive } from "vue";
import { sources as TemplateSource } from '../source'
import { cloneDeep } from 'lodash'

export default {
  name: "Layer",
  components: {},
  emits: ['change', 'update:modelValue'],
  props: {
    customStyle: {
      type: Object
    },
    inputSource: {
      type: Object,
      require: true
    },
    sourceId: {
      type: String,
      require: true
    },
    mapIns: {
      type: Object,
      require: true
    },
  },
  setup(props, { emit }) {
    const sourceRef = reactive({ default: {}, other: {}, custom: {} });

    const showMore = ref(false)
    
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
            target.default[key] = template[key];
          } else {
            target.other[key] = template[key];
          }
        }
      })
    }

    const initSource = () => {
      transform(TemplateSource, props.inputSource, sourceRef);
    }

    const updateSource = () => {

    }


    const change = (key, value) => {
      if(key && value) {
        if (props.mapIns) {
          try {
            const source = props.mapIns.getSource(props.sourceId);
            if (key === 'tiles') {
              source.setTiles(value.value);
            } else if (key === 'url') {
              source.setUrl(value.value);
            } else {
              source[key] = value.value;
            }

            emit('change');
            console.log('source ==>', source);
          } catch(e) {
            console.error('e ==>', key, value, e);
          }
        }
      }
    }

    onMounted(() => {
      initSource();
    });

    onUnmounted(() => {
      
    })

    return {
      sourceRef,
      showMore,
      change
    };
  },
};
</script>

<style lang="scss" scoped>
@use '../style.scss';

.mp-layer-source {
  margin: 10px;
  .mp-layer-default-content {
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
      right: 0.5px;
      font-size: 12px;
      color: #fff;
      background: rgb(43, 165, 236);;
      border-top-right-radius: 4px;
      padding: 1px 2px;
      transform-origin: top right;
      transform: scale(0.7);
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

.mp-layer-other-content {
    width: 100%;
    border-radius: 5px;
    box-sizing: content-box;
    position: relative;
    display: flex;
    flex-direction: column;
    row-gap: 5px;
}

</style>
