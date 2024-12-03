<template>
  <div :id="mapId" class="mapDiv"></div>
</template>

<script >
import { onMounted, onUnmounted } from "vue";
import MapboxLayerRender from "./MapboxLayerRender";

export default {
  name: "MapView",
  components: {},
  emits: ["mapLoaded"],
  props: {
    mapId: {
      type: String,
      default: "mapDiv_" + Date.now(),
    },
    event: {
      type: Object,
      default: {
        dragRotate: true,
        dragPan: true,
        doubleClickZoom: true,
        touchZoomRotate: true,
      },
    },
    params: {
      type: Object,
      default: {
        zoom: 5,
        maxZoom: 16,
        minZoom: 2,
        pitch: 0,
        bearing: 0.8,
        curve: 1,
        center: [103.980679, 30.482537],
      }
    },
    loadDem: {
      type: Boolean,
      default: false,
    },
    mapLayerList: {
      require: true,
      type: Array
    }
  },
  setup(props, { emit }) {
    let mapModel;

    const mapLoaded = () => {
      emit("mapLoaded", { map: mapModel.map, mapModel: mapModel });
    }

    onMounted(() => {
      mapModel = new MapboxLayerRender({
        mapId: props.mapId,
        params: props.params,
        mapLayerList: props.mapLayerList, //props.geoLayerList,
        loadDem: props.loadDem,
        mapLoaded: mapLoaded,
      });
    });

    onUnmounted(() => {
      if (mapModel) {
        mapModel.dispose();
        mapModel = null
      }
    })

    return {
      mapModel
    };
  },
};
</script>

<style lang="scss" scoped>
.mapDiv {
  width: 100%;
  height: 100vh;
  background: var(--map-bgc);
  :deep(.mapboxgl-popup-anchor-bottom .mapboxgl-popup-tip) {
    border-top-color: var(--theme-bg-80);
  }
  :deep(.mapboxgl-popup-anchor-top .mapboxgl-popup-tip) {
    border-bottom-color: var(--theme-bg-80);
  }
  :deep(.mapboxgl-marker > div),
  :deep(.mapboxgl-popup-content) {
    background-color: var(--theme-bg-80);
    color: #fff;
    font-size: 14px;
    pointer-events: none;
  }
}
</style>
