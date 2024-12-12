import mapboxgl from "mapbox-gl";
import 'mapbox-gl/dist/mapbox-gl.css';
import './style/mapbox-popup.scss';


import { defaultInitParams, defaultEnableEvent } from './lib/default';

export default class MapboxLayerRender {

  constructor(option) {
      this.map = null;
      this.mapId = option.mapId;

      this.params = Object.assign(defaultInitParams, option.params);
      this.enableEvent = Object.assign(defaultEnableEvent, option.enableEvent);

      this.mapLoadedCallback = option.mapLoaded;

      this.mapLayerList = option.mapLayerList;

      this.loadDem = option.loadDem;

      this.initMap();
  }

  // 初始化地图
  initMap() {
    if (this.map) return;
    
    // let mapStyle = 'mapbox://styles/mapbox/streets-v9';

    let mapStyle = {
      version: 8,
      name: "china",
      glyphs: "/{fontstack}/{range}.pbf",
      sources: {
      },
      layers: [
      ]
    }

    this.map = new mapboxgl.Map({
      container:             this.mapId, // container ID
      center:                this.params.center, // starting position [lng, lat]
      zoom:                  this.params.zoom, // starting zoom
      bearing:               this.params.bearing,
      maxZoom:               this.params.maxZoom,
      minZoom:               this.params.minZoom,
      pitch:                 this.params.pitch,
      antialias:             true,
      attributionControl:    false,
      renderWorldCopies:     false, // 如果为 true ，地图缩小时将渲染多个全局地图的副本。
      style:                 mapStyle,
      preserveDrawingBuffer: true, // 让html2Canvas可以截到地图，否则为黑屏
      hash:                  false, // sync `center`, `zoom`, `pitch`, and `bearing` with URL
    });


    this.map.on("load", () => {
      this.addAllLayer();
      if(this.mapLoadedCallback) {
        this.mapLoadedCallback()
      }
    });
  }


  setEnableEvent() {
    for (const key in this.enableEvent) {
      const enable = this.enableEvent[key];
      if (enable) {
        this.map[key].enable();
      } else {
        this.map[key].disable();
      }
    }
  }

  // 更新地图显示
  addAllLayer() {
    this.mapLayerList.sort(function (o1, o2) {
      return o1.extend.order - o2.extend.order;
    })
    this.mapLayerList.forEach(layerCfg => {
      const { source, layer, type } = layerCfg.extend;
      if (source) {
        if (!this.map.getSource(source.id)) {
          this.map.addSource(source.id, source);
        }

        if (this.loadDem && type==='dem') {
          this.map.setTerrain({ source: source.id, exaggeration: source.exaggeration })
        }
      } 

      if (layer) {
        const id = layer.id;
        if (!this.map.getLayer(id)) {
          this.map.addLayer(layer);
        }
      }
    })
  }

  visibilityAllLayer (show) {
    this.mapLayerList.forEach(layer => {
      if (this.map.getLayer(layer.ename)) {
        this.map.setLayoutProperty(layer.ename, "visibility",  show ? 'visible' : 'none');
      }
    })
  }

  removeLayer (item) {
    let lId = item.extend.layer;
    let sId = item.extend.source;
    if (this.map.getLayer(lId)) {
      this.map.removeLayer(lId)
    }

    if (this.map.getSource(sId)) {
      this.map.removeSource(sId)
    }
  }

  removeAllLayer() {
    for (let i = 0; i < this.mapLayerList.length; i++) {
      const item = this.mapLayerList[i];
      this.removeLayer(item);
    }
  }

  dispose () {
    this.removeAllLayer();
  }
}
