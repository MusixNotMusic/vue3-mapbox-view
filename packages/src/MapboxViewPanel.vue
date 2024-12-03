<template>
  <div class="mapbox-view-panel" :style="customStyle">
    <div v-for="(value, key, index) in panelLayerList" :key="index">
      <div class="title">{{ key }}</div>
      <div class="list">
        <div class="item" v-for="(item, index) in value" :key="index">
          <span class="btn" :class="{ active: item.layer.layout.visibility !== 'none'}" @click="showLayer(item)">
            {{ item.name }}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script >
import { ref, watch, onMounted, onUnmounted } from "vue";

export default {
  name: "MapboxViewPanel",
  components: {},
  emits: ["mapLoaded"],
  props: {
    mapIns: {
      require: true
    },
    mapLayerList: {
      require: true,
      type: Array
    },
    customStyle: {
      type: Object      
    }
  },
  setup(props, { emit }) {

    const panelLayerList = ref(null);
 
    watch(() => props.mapLayerList, (val, old) => {
      if (val !== old) {
        transform();
      }
    })

    const transform = () => {
      const product = {};
      props.mapLayerList.forEach((item) => {
        const layer = item.extend;
        if (layer) {
          layer.active = layer.layer.layout.visibility !== 'none'
          if (!product[layer.group]) {
            product[layer.group] = []
          }
          product[layer.group].push(layer);
        }
      })
      console.log('transform ==>', product);
      panelLayerList.value = product;
    }

    const visiableLayer =  (item, show) => {
      if (props.mapIns) {
        props.mapIns.setLayoutProperty(item.layer.id, 'visibility', show ? 'visible' : 'none');
        item.layer.layout.visibility = show ? 'visible' : 'none';
      }
    }

    const showLayer = (item) => {
      // 瓦片地图
      if (item.layer.type === 'raster') {

        item.active = !item.active;
        visiableLayer(item, item.active);

        Object.entries(panelLayerList.value).forEach(([key, value]) => {
          value.forEach(o => {
            if (o.layer.type === 'raster' && item.layer.id !== o.layer.id) {
              o.active = false;
              visiableLayer(o, false);
            }
          })
        })
      } else if (item.layer.type === 'hillshade') {
        item.active = !item.active;
        if (props.mapIns) {
          const { source } = item;
          props.mapIns.setTerrain(item.active ? { source: source.id, exaggeration: source.exaggeration }  : null);
        }
        visiableLayer(item, item.active);
      } else {
        item.active = !item.active;
        visiableLayer(item, item.active);
      }
     
    }

    onMounted(() => {
      transform();
    });

    onUnmounted(() => {
      
    })

    return {
      panelLayerList,
      showLayer
    };
  },
};
</script>

<style lang="scss" scoped>

.mapbox-view-panel {
  --mapbox-view-panel-bg: rgba(255, 255, 255, 0.7);
  --mapbox-view-panel-title: rgb(48, 44, 44);
  --mapbox-view-panel-btn: rgba(17, 20, 73, 0.6);
  --mapbox-view-panel-btn-text: #fff;
  --mapbox-view-panel-btn-hover: rgba(67, 75, 214, 0.6);
  --mapbox-view-panel-btn-active: rgb(25, 106, 212);

  position: fixed;
  top: 40px;
  right: 40px;
  background: var(--mapbox-view-panel-bg);
  padding: 10px 15px;
  border-radius: 5px;
  box-shadow: 2px 2px 15px 0px rgba(0, 0, 0, 0.65);
  .title {
    width: max-content;
    border-bottom: 1px solid var(--mapbox-view-panel-title);
    margin-bottom: 8px;
    padding: 2px 0px;
    color: var(--mapbox-view-panel-title);
    font-size: 16px;;
  }
  .list {
    display: flex;
    flex-wrap: wrap;
    column-gap: 5px;
    row-gap: 5px;
    width: 300px;
    margin-bottom: 8px;
    .item {
      width: calc(25% - 5px);
    }
    .btn {
      display: inline-block;
      background: var(--mapbox-view-panel-btn);
      min-width: 60px;
      width: max-content;
      text-align: center;
      padding: 5px;
      font-size: 14px;
      color: var(--mapbox-view-panel-btn-text);
      border-radius: 2px;
      cursor: pointer;
    }

    .btn:hover {
      background: var(--mapbox-view-panel-btn-hover);
    }

    .active {
      background: var(--mapbox-view-panel-btn-active) !important;
    }
  }
}
</style>
