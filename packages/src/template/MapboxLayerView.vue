<template>
  <div class="mapbox-layer" :style="customStyle">
    <div class="head">
      <span class="title">图层管理配置</span>
    </div>
   

    <div class="mapbox-layer-manage"  id="mp-layer-scroll">
      <el-collapse  v-model="activeNames" @change="() => {}">
        <el-collapse-item 
          v-for="(layer, index) in layerList" 
          :key="index"
          :name="layer.id">
          <template #title>
            <div class="title" @mousemove="focusIndex = index">
              <div class="left">
                <span  class="mb-icon icon-layer"></span>
                <span class="text">{{layer.id }}</span>
              </div>
            </div>
          </template>
          <div class="content">
            <span class="tag-t100-r" @click="jsonModeClick(layer, index)">json-viewer</span>
            <div class="json-view">
              <VueJsonPretty v-if="layer.showJson" :data="jsonObject" :expand-depth=5 copyable boxed sort></VueJsonPretty>
            </div>
            <Layer :inputLayer="layer" :mapIns="mapIns" @change="layerChange(layer, index)"></Layer>
            <Source v-if="sourceEntries[layer.source]" :inputSource="sourceEntries[layer.source]" :sourceId="layer.source" :mapIns="mapIns" @change="sourceChange(layer, index)"></Source>
          </div>

        </el-collapse-item>
      </el-collapse >
    </div>
  </div>
</template>

<script >
import { ref, onMounted, toRaw } from "vue";
import Scrollbar from 'smooth-scrollbar';
import Layer from './compoents/Layer.vue';
import Source from './compoents/Source.vue';

// import { JsonViewer } from 'vue3-json-viewer';
// import "vue3-json-viewer/dist/index.css";

import VueJsonPretty from 'vue-json-pretty';
import 'vue-json-pretty/lib/styles.css';

// import JsonViewer from 'vue-json-viewer';
// import 'vue-json-viewer/style.css';

import '../../iconfont/iconfont';
import '../../iconfont/iconfont.css';


export default {
  name: "MapboxLayerView",
  components: { Layer, Source, VueJsonPretty },
  props: {
    customStyle: {
      type: Object
    },
    mapIns: {
      require: true
    }
  },
  setup(props, { emit }) {

    let layerList = ref([]);
    let sourceEntries = ref({});
    const activeNames = ref([]);

    const focusIndex = ref(false);
    const showJson = ref(false);
    const jsonObject = ref(null);


    const loadLayer = () => {
      if (props.mapIns) {
        const style = props.mapIns.getStyle();
        if (style) {
          layerList.value = toRaw(style.layers);
          sourceEntries.value = toRaw(style.sources);
        }
      }
    }


    const setJsonData = (layer, index) => {
      const _layer = props.mapIns.getLayer(layer.id);
      const _source = props.mapIns.getSource(layer.source);
      jsonObject.value = {
        layer: _layer ? _layer.serialize() : {},
        source: _source ? _source.serialize() : {}
      }

      console.log('setJsonData==>',  jsonObject.value);
    }

    const jsonModeClick = (layer, index) => {
      layer.showJson= !layer.showJson;
      if (layer.showJson) {
        setJsonData(layer, index);
      }
    }

    const layerChange = (layer, index) => {
      setJsonData(layer, index);
     
    }

    const sourceChange = (layer, index) => {
      setJsonData(layer, index);
    }

    onMounted(() => {
      Scrollbar.init(document.querySelector('#mp-layer-scroll'));
      loadLayer();
    });

    return {
      layerList,
      activeNames,
      sourceEntries,
      focusIndex,
      showJson,
      jsonObject,
      jsonModeClick,
      layerChange,
      sourceChange,
    };
  },
};
</script>

<style lang="scss" scoped>
@use './style.scss';
.mapbox-layer {
  --mapbox-layer-manage-bg: rgba(255, 255, 255, 0.7);
  --mapbox-layer-manage-title: rgb(48, 44, 44);
  --mapbox-layer-manage-btn: rgba(17, 20, 73, 0.6);
  --mapbox-layer-manage-btn-text: #fff;
  --mapbox-layer-manage-btn-hover: rgba(67, 75, 214, 0.6);
  --mapbox-layer-manage-btn-active: rgb(25, 106, 212);

  position: fixed;
  top: 40px;
  left: 40px;
  background: var(--mapbox-layer-manage-bg);
  width: 800px;
  padding: 10px;
  border-radius: 5px;
  box-shadow: 2px 2px 15px 0px rgba(0, 0, 0, 0.65);
  min-height: 300px;
  
  .head {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;
    .title {
      font-weight: 600;
      font-size: 18px;
    }
  }

  .mapbox-layer-manage{
    max-height: 80vh;
    overflow-y: auto;
    padding-right: 10px;
    .title {
      display: flex;
      align-items: center;
      column-gap: 5px;
      margin-left: 5px;
      width: 100%;
      position: relative;
      
      .text {
        font-weight: bold;
        font-size: 14px;
      }

      .left {
        display: flex;
        align-items: center;
        column-gap: 5px;
      }

      .json-tag {
        position: absolute;
        right: 0;
        display: block;
        font-size: 12px;
        color: #fff;
        height: 28px;
        line-height: 28px;
        background: rgb(21, 104, 5);;
        padding: 1px 2px;
        transform: scale(0.7);
        cursor: pointer;
      }
    }
  }
}

:deep(.scrollbar-thumb) {
  width: 3px;
}

:deep(.scrollbar-track-y) {
  width: 3px;
}

.json-view {
  width: calc(100% - 20px);
  margin-left: 10px;
}
.content {
  position: relative;
}

.drop-area {
  height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: var(--el-upload-dragger-padding-horizontal) var(--el-upload-dragger-padding-vertical);
  background-color: var(--el-fill-color-blank);
  border: 1px dashed var(--el-border-color);
  border-radius: 6px;
  box-sizing: border-box;
  text-align: center;
  cursor: pointer;
  position: relative;
  overflow: hidden;

  &:hover {
    border-color: var(--el-color-primary);
  }
  .el-icon--upload {
    font-size: 60px;
    color: #aaa;
  }

  .el-upload__text {
    color: var(--el-text-color-regular);
    font-size: 14px;
    text-align: center;
    em{
      color: var(--el-color-primary);
      font-style: normal;
    }
  }
}
</style>
