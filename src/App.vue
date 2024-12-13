<script>
import { ref, onMounted } from 'vue'

// import { MapboxView, MapboxViewPanel, MapboxLayerManage, MapboxLayerView } from '../dist/@cdyw/vue3-mapbox-view.es.js';
import { MapboxView, MapboxViewPanel, MapboxLayerManage, MapboxLayerView } from '../packages/index';
// import { MapboxView, MapboxViewPanel, MapboxLayerManage, MapboxLayerView } from '@cdyw/vue3-mapbox-view';
import '@cdyw/vue3-mapbox-view/dist/style.css';

import { mapLayerList } from '../packages/src/data';

// import MapboxView from '../packages/src/MapboxView.vue';
// import MapboxViewPanel from '../packages/src/MapboxViewPanel.vue';
// import MapboxLayerManage from '../packages/src/template/MapboxLayerManage.vue';

export default {
  name: 'App',
  components: { MapboxView, MapboxViewPanel, MapboxLayerManage, MapboxLayerView },
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
  <MapboxView :loadDem="true"  @mapLoaded="mapLoaded"></MapboxView>
  <!-- <MapboxViewPanel v-if="loaded" :mapLayerList="layerList" :mapIns="mapIns"></MapboxViewPanel> -->
  <MapboxLayerView v-if="loaded" :mapIns="mapIns"></MapboxLayerView>
</template>

<style scoped>
html, body {
  margin: 0px;
  padding: 0px;
}
</style>
