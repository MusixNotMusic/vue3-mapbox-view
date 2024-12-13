<template>
  <div class="mapbox-layer" :style="customStyle">
    <div class="head">
      <span class="title">图层管理配置</span>
  
      <div class="handle">
        <el-radio-group v-model="mode" size="small" @change="switchModeClick()">
          <el-radio-button key="mapbox" :value="'mapbox'" size="small">加载图层</el-radio-button>
          <el-radio-button key="json" :value="'json'" size="small">导入图层</el-radio-button>
        </el-radio-group>
      </div>
    </div>

    <div class="drop-area"
          v-if="mode === 'json'"
          @drop="handleFileDrop"
          @dragover.prevent
          @dragenter.prevent>
      <el-icon class="el-icon--upload"><UploadFilled/></el-icon>
      <div class="el-upload__text">
        <em>拖拽文件到这里</em>
      </div>
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
              <VueJsonPretty v-if="layer.showJson" :value="jsonObject" :expand-depth=5 copyable boxed sort></VueJsonPretty>
            </div>
            <Custom v-model="customList[index]" @change="customChange(layer, index)"></Custom>
            <Layer :inputLayer="layer" :mapIns="mapIns" @change="layerChange(layer, index)"></Layer>
            <Source v-if="sourceEntries[layer.source]" :inputSource="sourceEntries[layer.source]" :sourceId="layer.source" :mapIns="mapIns" @change="sourceChange(layer, index)"></Source>
          </div>

        </el-collapse-item>
      </el-collapse >
    </div>
  </div>
</template>

<script >
import { ref, watch, onMounted, onUnmounted, toRaw, reactive, markRaw } from "vue";
import Scrollbar from 'smooth-scrollbar';
import Custom from './compoents/Custom.vue';
import Layer from './compoents/Layer.vue';
import Source from './compoents/Source.vue';

import VueJsonPretty from 'vue-json-pretty';
import 'vue-json-pretty/lib/styles.css';

import '../../iconfont/iconfont';
import '../../iconfont/iconfont.css';

import { StringType, NumberType } from "./types/types";

import { UploadFilled } from '@element-plus/icons-vue'
import { ElMessage } from 'element-plus';
import { isString, isNumber } from 'lodash';

export default {
  name: "MapboxLayerManage",
  components: { Custom, Layer, Source, VueJsonPretty, UploadFilled },
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

    const mode = ref('mapbox');

    let customList = reactive([]);

    const initData = () => {
      layerList = ref([]);
      sourceEntries = ref({});
      customList = reactive([]);
    }

    const loadLayer = () => {
      // initData();
      if (props.mapIns) {
        const style = props.mapIns.getStyle();
        if (style) {
          layerList.value = toRaw(style.layers);
          sourceEntries.value = toRaw(style.sources);

          const size = layerList.value.length;
          for(let i = 0; i < size; i++) {
            customList[i] = {
              name:  new StringType(),
              group: new StringType(),
              from:  new StringType(),
              order: new NumberType()
            }
          }
        }
      }
    }

    const loadJson = (list) => {
      if (list) {
        list.forEach((item, index) => {
          if(item) {
            const source = item.layer.source;
            layerList.value.push(item.layer);
            sourceEntries.value[source] = item.source;

            delete item.layer;
            delete item.source;

            const o = {};
            for(let key in item) {
              if (isString(item[key])) {
                o[key] = new StringType(item[key]);
              } else if (isNumber(item[key])) {
                o[key] = new NumberType(item[key]);
              }
            }
            customList[index] = o;
          }
        })
      }
    }

    const setJsonData = (layer, index) => {
      if(mode.value === 'mapbox') {
        const _layer = props.mapIns.getLayer(layer.id);
        const _source = props.mapIns.getSource(layer.source);
        jsonObject.value = {
          layer: _layer.serialize(),
          source: _source.serialize()
        }

        Object.entries(customList[index]).forEach(([key, value]) => {
          jsonObject.value[key] = value.value;
        })
      }
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

    const customChange = (layer, index) => {
      setJsonData(layer, index);
    }

    const switchModeClick = () => {
      layerList.value = [];
      sourceEntries.value = {};
      
      if (mode.value === 'mapbox') {
        loadLayer();
      } else if (mode.value === 'json') {
        // loadJson();
      }
    }

    const handleFileDrop = (event) => {
      event.preventDefault();

      const files = event.dataTransfer.files;
      console.log('files ==>', files);
      let reader = new FileReader();
      for(let i = 0; i < files.length; i++) {
        const file = files[i];
        if (file.type.includes('json')) {
          reader.readAsText(file);
          reader.onloadend = () => {
            // console.log('json =>', JSON.parse(reader.result))
            const json = JSON.parse(reader.result);
            loadJson(json.map(o => o.extend));
          }
        } else {
          ElMessage.error('拖拽文件必须是json文件')
        }
      }
    }

    onMounted(() => {
      Scrollbar.init(document.querySelector('#mp-layer-scroll'));
      switchModeClick();
    });

    return {
      layerList,
      customList,
      activeNames,
      sourceEntries,
      focusIndex,
      showJson,
      jsonObject,
      jsonModeClick,
      customChange,
      layerChange,
      sourceChange,
      mode,

      switchModeClick,
      handleFileDrop
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
  padding: 20px;
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
