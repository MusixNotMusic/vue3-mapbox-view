<template>
  <div class="mapbox-layer-manage" :style="customStyle">
    <div v-for="(layer, index) in layerList" :key="index">
      <div class="title">{{ layer.id }}</div>
      <!-- <div class="list">
        <div class="item" v-for="(item, index) in value" :key="index">
          <span class="btn" :class="{ active: item.layer.layout.visibility !== 'none'}" @click="showLayer(item)">
            {{ item.name }}
          </span>
        </div>
      </div> -->
    </div>
  </div>
</template>

<script >
import { ref, watch, onMounted, onUnmounted, toRaw } from "vue";

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
  padding: 10px 15px;
  border-radius: 5px;
  box-shadow: 2px 2px 15px 0px rgba(0, 0, 0, 0.65);
  .layer-wrap {

  }
}
</style>
