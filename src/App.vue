<script>
import { ref, onMounted } from 'vue'

// import { MapboxView } from '@cdyw/vue3-mapbox-view';
// import '@cdyw/vue3-mapbox-view/dist/style.css';

import MapboxView from '../packages/src/MapboxView.vue';

import { mapLayerList } from '../packages/src/data';
import MapboxViewPanel from '../packages/src/MapboxViewPanel.vue';
import MapboxLayerManage from '../packages/src/template/MapboxLayerManage.vue';

export default {
  name: 'App',
  components: { MapboxView, MapboxViewPanel, MapboxLayerManage },
  setup() {
    const layerList = ref(mapLayerList);
    
    const loaded = ref(false);
    const mapIns = ref(null);

    const mapLoaded = ({ map, mapModel }) => {
      console.log('mapLoaded ==>', map, mapModel);

      window.mapIns = map;
      loaded.value = true;
      mapIns.value = map;
    }

    onMounted(() => {})
    return {
      mapIns,
      loaded,
      layerList,
      mapLoaded,
    }
  }
} 

</script>

<template>
  <MapboxView :loadDem="true" :mapLayerList="layerList" @mapLoaded="mapLoaded"></MapboxView>
  <MapboxViewPanel v-if="loaded" :mapLayerList="layerList" :mapIns="mapIns"></MapboxViewPanel>
  <MapboxLayerManage v-if="loaded" :mapIns="mapIns"></MapboxLayerManage>
</template>

<style scoped>
html, body {
  margin: 0px;
  padding: 0px;
}
</style>
