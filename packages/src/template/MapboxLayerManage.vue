<template>
  <div class="mapbox-layer-manage" :style="customStyle" id="mp-layer-scroll">
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
          <span class="tag-t100-r" @click="jsonModeClick(layer)">json-viewer</span>
          <div class="json-view">
            <JsonViewer v-if="layer.showJson" :value="jsonObject" :expand-depth=5 copyable boxed sort></JsonViewer>
          </div>
          <Custom v-model="customList" @change="customChange(layer)"></Custom>
          <Layer :inputLayer="layer" :mapIns="mapIns" @change="layerChange(layer)"></Layer>
          <Source v-if="sourceEntries[layer.source]" :inputSource="sourceEntries[layer.source]" :sourceId="layer.source" :mapIns="mapIns" @change="sourceChange(layer)"></Source>
        </div>

      </el-collapse-item>
    </el-collapse >
  </div>
</template>

<script >
import { ref, watch, onMounted, onUnmounted, toRaw, reactive } from "vue";
import Scrollbar from 'smooth-scrollbar';
import Custom from './compoents/Custom.vue';
import Layer from './compoents/Layer.vue';
import Source from './compoents/Source.vue';

import JsonViewer from 'vue-json-viewer';
import 'vue-json-viewer/style.css';

import '../../iconfont/iconfont';
import '../../iconfont/iconfont.css';

import String from './compoents/base/String.vue'
import Number from './compoents/base/Number.vue'

export default {
  name: "MapboxLayerManage",
  components: { Custom, Layer, Source, JsonViewer },
  props: {
    customStyle: {

    },
    mapIns: {
      require: true
    }
  },
  setup(props, { emit }) {

    const layerList = ref([]);
    const sourceEntries = ref({});
    const activeNames = ref([]);

    const focusIndex = ref(false);
    const showJson = ref(false);
    const jsonObject = ref(null);


    const customList = reactive({
      name: { value: '', component: String },
      group: { value: '', component: String },
      from: { value: '', component: String },
      order: { value: 0, component: Number }
    });

    watch(() => props.mapLayerList, (val, old) => {
      if (val !== old) {
      }
    })


    const loadLayer = () => {
      if (props.mapIns) {
        const style = props.mapIns.getStyle();
        if (style) {
          layerList.value = toRaw(style.layers);
          sourceEntries.value = toRaw(style.sources);
        }
      }
    }

    const setJsonData = (layer) => {
      const _layer = props.mapIns.getLayer(layer.id);
      const _source = props.mapIns.getSource(layer.source);
      jsonObject.value = {
        layer: _layer.serialize(),
        source: _source.serialize()
      }
    }

    const jsonModeClick = (layer) => {
      layer.showJson= !layer.showJson;
      if (layer.showJson) {
        setJsonData(layer);
      }
    }

    const layerChange = (layer) => {
      setJsonData(layer);
    }

    const sourceChange = (layer) => {
      setJsonData(layer);
    }
    const customChange = (layer) => {
      setJsonData(layer);
      Object.entries(customList).forEach(([key, value]) => {
        jsonObject.value[key] = value.value;
      })
    }
   

    onMounted(() => {
      Scrollbar.init(document.querySelector('#mp-layer-scroll'));
      loadLayer();
    });

    onUnmounted(() => {
      
    })

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
    };
  },
};
</script>

<style lang="scss" scoped>
@use './style.scss';
.mapbox-layer-manage {
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
</style>
