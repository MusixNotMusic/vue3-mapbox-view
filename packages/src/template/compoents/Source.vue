<template>
  <div class="mapbox-layer-manage" :style="customStyle">
    <!-- <div v-for="(layer, index) in layerList" :key="index">
      <div class="title">{{ layer.id }}</div>
    </div> -->
    <el-collapse  v-model="activeNames" @change="() => {}">
      <el-collapse-item 
        v-for="(layer, index) in layerList" 
        :key="index"
        :name="layer.id">
        <template #title>
          <div class="title">
            <span  class="mb-icon icon-layer"></span>
            <!-- <span :class="['icon-' + layer.type ]" :title="layer.type"></span> -->
            <span class="text">{{layer.id }}</span>
          </div>
        </template>
      </el-collapse-item>
    </el-collapse >
  </div>
</template>

<script >
import { ref, watch, onMounted, onUnmounted, toRaw } from "vue";
import '../../iconfont/iconfont';
import '../../iconfont/iconfont.css';

export default {
  name: "MapboxLayerManage",
  components: {},
  props: {
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
          sourceEntries.value = toRaw(style.source);
        }
      }
    }

   

    onMounted(() => {
      loadLayer();
    });

    onUnmounted(() => {
      
    })

    return {
      layerList,
      activeNames,
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
  width: 600px;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 2px 2px 15px 0px rgba(0, 0, 0, 0.65);
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
</style>
