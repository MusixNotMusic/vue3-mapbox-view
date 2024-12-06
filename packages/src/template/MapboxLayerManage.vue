<template>
  <div class="mapbox-layer-manage" :style="customStyle" id="mp-layer-scroll">
    <el-collapse  v-model="activeNames" @change="() => {}">
      <el-collapse-item 
        v-for="(layer, index) in layerList" 
        :key="index"
        :name="layer.id">
        <template #title>
          <div class="title">
            <span  class="mb-icon icon-layer"></span>
            <span class="text">{{layer.id }}</span>
          </div>
        </template>
        <Layer :inputLayer="layer"></Layer>

        <Source v-if="sourceEntries[layer.source]" :inputSource="sourceEntries[layer.source]"></Source>
      </el-collapse-item>
    </el-collapse >
  </div>
</template>

<script >
import { ref, watch, onMounted, onUnmounted, toRaw } from "vue";
import Scrollbar from 'smooth-scrollbar';
import Layer from './compoents/Layer.vue';
import Source from './compoents/Source.vue';


import '../../iconfont/iconfont';
import '../../iconfont/iconfont.css';

export default {
  name: "MapboxLayerManage",
  components: { Layer, Source },
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
 
    watch(() => props.mapLayerList, (val, old) => {
      if (val !== old) {
        transform();
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

   

    onMounted(() => {
      Scrollbar.init(document.querySelector('#mp-layer-scroll'));
      loadLayer();
    });

    onUnmounted(() => {
      
    })

    return {
      layerList,
      activeNames,
      sourceEntries
    };
  },
};
</script>

<style lang="scss" scoped>

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
    .text {
      font-weight: bold;
      font-size: 14px;
    }
  }
}

:deep(.scrollbar-thumb) {
  width: 3px;
}

:deep(.scrollbar-track-y) {
  width: 3px;
}
</style>
