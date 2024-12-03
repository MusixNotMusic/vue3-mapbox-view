# Vue3 MapboxGL 地图瓦片加载器


## props

默认值  
```js
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
```

## source
1. vector 矢量数据
2. raster 瓦片数据
3. raster-dem 瓦片地形数据

## layer 类型
1. symbol 点
2. line 线
3. fill 填充
4. raster 瓦片
5. hillshade 地形dem


|配置字段|说明|exmaple|
|---|---|---|
|from|资源来源|geoserver\|gaode\|天地图|
|order|排序|升序|
|source|资源|raster\|vector\| raster-dem|
|layer|图层|上面layer 类型|
|group|分组|用于归类 瓦片、地形、基础点线等|

### 基础省市县镇

```js
 {
      "extend": {
          from: 'geoserver',
          order: 3,
          source: {
              id: 'province_line',
              type: "vector",
              tiles: [`http://222.18.149.126:9030/geoserver/gwc/service/wmts?REQUEST=GetTile&SERVICE=WMTS&VERSION=1.0.0&LAYER=yw:province-line&STYLE=&TILEMATRIXSET=EPSG:900913&FORMAT=application/vnd.mapbox-vector-tile&TILEMATRIX=EPSG:900913:{z}&TILECOL={x}&TILEROW={y}`],
          },
          layer: {
              id: 'province_line',
              type: 'line',
              "source-layer": 'province-line',
              "source": 'province_line',
              minzoom: 0,
              maxzoom: 6,
              layout: {
                  "line-cap": "round",
                  "line-join": "round"
              },
              paint: {
                  "line-opacity": 0.8,
                  "line-color": "rgb(196, 196, 196)",
                  "line-width": 1,
              }
          },
      }
    },
    {
      "extend": {
          from: 'geoserver',
          order: 3,
          source: {
              id: 'province_point',
              type: "vector",
              // tiles: ['http://222.18.149.126:9030/geoserver/gwc/service/wmts?layer=yw:province_line&style=&tilematrixset=EPSG:900913&Service=WMTS&Request=GetTile&Version=1.0.0&Format=application/vnd.mapbox-vector-tile&TileMatrix=EPSG:900913:{z}&TileCol={x}&TileRow={y}'],
              tiles: [`http://222.18.149.126:9030/geoserver/gwc/service/wmts?REQUEST=GetTile&SERVICE=WMTS&VERSION=1.0.0&LAYER=yw:province-point&STYLE=&TILEMATRIXSET=EPSG:900913&FORMAT=application/vnd.mapbox-vector-tile&TILEMATRIX=EPSG:900913:{z}&TILECOL={x}&TILEROW={y}`],
          },
          layer: {
              id: 'province_point',
              type: 'symbol',
              "source-layer": 'province-point',
              "source": 'province_point',
              minzoom: 0,
              maxzoom: 6,
              layout: {
                  "text-font": [
                      "DIN Offc Pro Medium"
                  ],
                  "text-size": 12,
                  "text-field": [ "get", "name" ]
              },
              paint: {
                  "text-color": "rgba(0, 0, 0, 0.85)",
                  "text-halo-width": 2,
                  "text-halo-color": "rgba(255, 255, 255, 0.85)",
              },
          },
      }
    },
    {
      "extend": {
          from: 'geoserver',
          order: 3,
          source: {
              id: 'district-line',
              type: "vector",
              // tiles: ['http://222.18.149.126:9030/geoserver/gwc/service/wmts?layer=yw:province_line&style=&tilematrixset=EPSG:900913&Service=WMTS&Request=GetTile&Version=1.0.0&Format=application/vnd.mapbox-vector-tile&TileMatrix=EPSG:900913:{z}&TileCol={x}&TileRow={y}'],
              tiles: [`http://222.18.149.126:9030/geoserver/gwc/service/wmts?REQUEST=GetTile&SERVICE=WMTS&VERSION=1.0.0&LAYER=yw:district-line&STYLE=&TILEMATRIXSET=EPSG:900913&FORMAT=application/vnd.mapbox-vector-tile&TILEMATRIX=EPSG:900913:{z}&TILECOL={x}&TILEROW={y}`],
          },
          layer: {
              id: 'district-line',
              type: 'line',
              minzoom: 6,
              maxzoom: 7,
              "source-layer": 'district-line',
              "source": 'district-line',
              layout: {
                  "line-cap": "round",
                  "line-join": "round"
              },
              paint: {
                  "line-opacity": 0.8,
                  "line-color": "rgb(196, 196, 196)",
                  "line-width": 1,
              }
          },
      }
    },
    {
      "extend": {
          from: 'geoserver',
          order: 3,
          source: {
              id: 'district-point',
              type: "vector",
              // tiles: ['http://222.18.149.126:9030/geoserver/gwc/service/wmts?layer=yw:province_line&style=&tilematrixset=EPSG:900913&Service=WMTS&Request=GetTile&Version=1.0.0&Format=application/vnd.mapbox-vector-tile&TileMatrix=EPSG:900913:{z}&TileCol={x}&TileRow={y}'],
              tiles: ['http://222.18.149.126:9030/geoserver/gwc/service/wmts?REQUEST=GetTile&SERVICE=WMTS&VERSION=1.0.0&LAYER=yw:district-point&STYLE=&TILEMATRIX=EPSG:900913:{z}&TILEMATRIXSET=EPSG:900913&FORMAT=application/vnd.mapbox-vector-tile&TILECOL={x}&TILEROW={y}'],
          },
          layer: {
              id: 'district-point',
              type: 'symbol',
              "source-layer": 'district-point',
              "source": 'district-point',
              minzoom: 6,
              maxzoom: 7,
              layout: {
                  "text-font": [
                      "DIN Offc Pro Medium"
                  ],
                  "text-size": 12,
                  "text-field": [ "get", "name" ]
              },
              paint: {
                  "text-color": "rgba(0, 0, 0, 0.85)",
                  "text-halo-width": 2,
                  "text-halo-color": "rgba(255, 255, 255, 0.85)",
              },
          },
      }
    },
    {
      "extend": {
          from: 'geoserver',
          order: 3,
          source: {
              id: 'county-line',
              type: "vector",
              // tiles: ['http://222.18.149.126:9030/geoserver/gwc/service/wmts?layer=yw:province_line&style=&tilematrixset=EPSG:900913&Service=WMTS&Request=GetTile&Version=1.0.0&Format=application/vnd.mapbox-vector-tile&TileMatrix=EPSG:900913:{z}&TileCol={x}&TileRow={y}'],
              tiles: [`http://222.18.149.126:9030/geoserver/gwc/service/wmts?REQUEST=GetTile&SERVICE=WMTS&VERSION=1.0.0&LAYER=yw:county-line&STYLE=&TILEMATRIXSET=EPSG:900913&FORMAT=application/vnd.mapbox-vector-tile&TILEMATRIX=EPSG:900913:{z}&TILECOL={x}&TILEROW={y}`],
          },
          layer: {
              id: 'county-line',
              type: 'line',
              "source-layer": 'county-line',
              "source": 'county-line',
              minzoom: 7,
              maxzoom: 10,
              layout: {
                  "line-cap": "round",
                  "line-join": "round"
              },
              paint: {
                  "line-opacity": 0.8,
                  "line-color": "rgb(196, 196, 196)",
                  "line-width": 1,
              }
          },
      }
    },
    {
      "extend": {
          from: 'geoserver',
          order: 3,
          source: {
              id: 'county-point',
              type: "vector",
              // tiles: ['http://222.18.149.126:9030/geoserver/gwc/service/wmts?layer=yw:province_line&style=&tilematrixset=EPSG:900913&Service=WMTS&Request=GetTile&Version=1.0.0&Format=application/vnd.mapbox-vector-tile&TileMatrix=EPSG:900913:{z}&TileCol={x}&TileRow={y}'],
              tiles: ['http://222.18.149.126:9030/geoserver/gwc/service/wmts?REQUEST=GetTile&SERVICE=WMTS&VERSION=1.0.0&LAYER=yw:county-point&STYLE=&TILEMATRIX=EPSG:900913:{z}&TILEMATRIXSET=EPSG:900913&FORMAT=application/vnd.mapbox-vector-tile&TILECOL={x}&TILEROW={y}'],
          },
          layer: {
              id: 'county-point',
              type: 'symbol',
              "source-layer": 'county-point',
              "source": 'county-point',
              minzoom: 7,
              maxzoom: 10,
              layout: {
                  "text-font": [
                      "DIN Offc Pro Medium"
                  ],
                  "text-size": 12,
                  "text-field": [ "get", "name" ]
              },
              paint: {
                  "text-color": "rgba(0, 0, 0, 0.85)",
                  "text-halo-width": 2,
                  "text-halo-color": "rgba(255, 255, 255, 0.85)",
              },
          },
      }
    },
    {
      "extend": {
          from: 'geoserver',
          order: 3,
          source: {
              id: 'town-line',
              type: "vector",
              // tiles: ['http://222.18.149.126:9030/geoserver/gwc/service/wmts?layer=yw:province_line&style=&tilematrixset=EPSG:900913&Service=WMTS&Request=GetTile&Version=1.0.0&Format=application/vnd.mapbox-vector-tile&TileMatrix=EPSG:900913:{z}&TileCol={x}&TileRow={y}'],
              tiles: [`http://222.18.149.126:9030/geoserver/gwc/service/wmts?REQUEST=GetTile&SERVICE=WMTS&VERSION=1.0.0&LAYER=yw:town-line&STYLE=&TILEMATRIXSET=EPSG:900913&FORMAT=application/vnd.mapbox-vector-tile&TILEMATRIX=EPSG:900913:{z}&TILECOL={x}&TILEROW={y}`],
          },
          layer: {
              id: 'town-line',
              type: 'line',
              minzoom: 10,
              maxzoom: 22,
              "source-layer": 'town-line',
              "source": 'town-line',
              layout: {
                  "line-cap": "round",
                  "line-join": "round"
              },
              paint: {
                  "line-opacity": 0.8,
                  "line-color": "rgb(196, 196, 196)",
                  "line-width": 1,
              }
          },
      }
    },
    {
      "extend": {
          order: 3,
          form: 'geoserver',
          source: {
              id: 'town-point',
              type: "vector",
              // tiles: ['http://222.18.149.126:9030/geoserver/gwc/service/wmts?layer=yw:province_line&style=&tilematrixset=EPSG:900913&Service=WMTS&Request=GetTile&Version=1.0.0&Format=application/vnd.mapbox-vector-tile&TileMatrix=EPSG:900913:{z}&TileCol={x}&TileRow={y}'],
              tiles: ['http://222.18.149.126:9030/geoserver/gwc/service/wmts?REQUEST=GetTile&SERVICE=WMTS&VERSION=1.0.0&LAYER=yw:town-point&STYLE=&TILEMATRIX=EPSG:900913:{z}&TILEMATRIXSET=EPSG:900913&FORMAT=application/vnd.mapbox-vector-tile&TILECOL={x}&TILEROW={y}'],
          },
          layer: {
              id: 'town-point',
              type: 'symbol',
              minzoom: 10,
              maxzoom: 22,
              "source-layer": 'town-point',
              "source": 'town-point',
              layout: {
                  "text-font": [
                      "DIN Offc Pro Medium"
                  ],
                  "text-size": 12,
                  "text-field": [ "get", "name" ]
              },
              paint: {
                  "text-color": "rgba(0, 0, 0, 0.85)",
                  "text-halo-width": 2,
                  "text-halo-color": "rgba(255, 255, 255, 0.85)",
              },
          },
      }
    },
```



### 本地瓦片地图

```js
{
        "extend": {
            from: 'geoserver',
            order: 1,
            source: {
                id: 'hillshade',
                type: "raster",
                tiles: ['http://222.18.149.62:9030/geoserver/gwc/service/wmts?layer=hillshade&style=&tilematrixset=EPSG:900913&Service=WMTS&Request=GetTile&Version=1.0.0&Format=image/png&TileMatrix=EPSG:900913:{z}&TileCol={x}&TileRow={y}'],
            },
            layer: {
                id: 'hillshade',
                type: 'raster',
                "source": 'hillshade',
                layout: {
                    visibility: "none", // 'none' //visible
                },
                paint: {
                    "raster-fade-duration": 0,
                },
            },
        }
    },
    {
        "extend": {
            from: 'geoserver',
            order: 2,
            source: {
                id: 'hillshadeblack',
                type: "raster",
                tiles: ['http://222.18.149.62:9030/geoserver/gwc/service/wmts?layer=hillshadeblack&style=&tilematrixset=EPSG:900913&Service=WMTS&Request=GetTile&Version=1.0.0&Format=image/png&TileMatrix=EPSG:900913:{z}&TileCol={x}&TileRow={y}'],
            },
            layer: {
                id: 'hillshadeblack',
                type: 'raster',
                "source": 'hillshadeblack',
                layout: {
                    visibility: "none", // 'none' //visible
                },
                paint: {
                    "raster-fade-duration": 0,
                },
            },
        }
    },
    {
        "extend": {
            from: 'pic',
            order: 2,
            source: {
                id: 'satellite',
                type: "raster",
                tiles: ['http://222.18.149.42:9030/mbt/services/wx/{z}/tiles/{z}/{x}/{y}.png?t=iVsoFtVedqAIhI3EN104'],
            },
            layer: {
                id: 'satellite',
                type: 'raster',
                "source": 'satellite',
                layout: {
                    visibility: "none", // 'none' //visible
                },
                paint: {
                    "raster-fade-duration": 0,
                },
            },
        }
    },
```

### 第三方瓦片

```js
 {
        "extend": {
            from: 'tianditu',
            type: 'raster',
            order: 2,
            source: {
                id: 'tianditu',
                type: "raster",
                tiles: ['http://t5.tianditu.gov.cn/img_w/wmts?&SERVICE=WMTS&REQUEST=GetTile&VERSION=1.0.0&LAYER=img&STYLE=default&TILEMATRIXSET=w&FORMAT=tiles&TILEMATRIX={z}&TILEROW={y}&TILECOL={x}&tk=764ade5f6e077396bf2c1231e4ecaf25'],
            },
            layer: {
                id: 'tianditu',
                type: 'raster',
                "source": 'tianditu',
                layout: {
                    visibility: "none", // 'none' //visible
                },
                paint: {
                    "raster-fade-duration": 0,
                },
            },
        }
    },
    {
        "extend": {
            from: 'gaode',
            type: 'raster',
            order: 2,
            source: {
                id: 'gaode',
                type: "raster",
                tiles: ['http://wprd04.is.autonavi.com/appmaptile?x={x}&y={y}&z={z}&lang=zh_cn&size=1&style=8'],
            },
            layer: {
                id: 'gaode',
                type: 'raster',
                "source": 'gaode',
                layout: {
                    visibility: "visible", // 'none' //visible
                },
                paint: {
                    "raster-fade-duration": 0,
                },
            },
        }
    },
```

### 高程瓦片服务DEM
```js
{
      "extend": {
          from: 'pic',
          type: 'dem',
          order: 2,
          source: {
              id: 'yw-dem',
              type: "raster-dem",
              tiles: ['http://222.18.149.42:9030/mbt/services/trgb/{z}/tiles/{z}/{x}/{y}.png?t=iVsoFtVedqAIhI3EN104'],
              minzoom: 3,
              maxzoom: 12,
              exaggeration: 1.5,
          },
          layer: {
              id: 'yw-dem',
              type: 'hillshade',
              "source": 'yw-dem',
              minzoom: 3,
              maxzoom: 12,
              layout: {
                  visibility: "visible", // 'none' //visible
              },
              paint: {
                  "hillshade-illumination-anchor": "map",
                  "hillshade-illumination-direction": 315,
                  "hillshade-shadow-color": "#D9D9D9",
                  "hillshade-highlight-color": "#D9D9D9",
              },
          },
      }
  }
```


### 湖泊 河流

```js
{
    "extend": {
        from: 'geoserver',
        order: 4,
        source: {
            id: 'lake-area',
            type: "vector",
            // tiles: ['http://222.18.149.126:9030/geoserver/gwc/service/wmts?layer=yw:province_line&style=&tilematrixset=EPSG:900913&Service=WMTS&Request=GetTile&Version=1.0.0&Format=application/vnd.mapbox-vector-tile&TileMatrix=EPSG:900913:{z}&TileCol={x}&TileRow={y}'],
            tiles: [`http://222.18.149.126:9030/geoserver/gwc/service/wmts?REQUEST=GetTile&SERVICE=WMTS&VERSION=1.0.0&LAYER=yw:lake-area&STYLE=&TILEMATRIXSET=EPSG:900913&FORMAT=application/vnd.mapbox-vector-tile&TILEMATRIX=EPSG:900913:{z}&TILECOL={x}&TILEROW={y}`],
        },
        layer: {
            id: 'lake-area',
            type: 'fill',
            minzoom: 2,
            maxzoom: 15,
            "source-layer": 'lake-area',
            "source": 'lake-area',
            layout: {
                visibility: "visible", // 'none' //visible
            },
            paint: {
                "fill-opacity": 0.8,
                "fill-color": "rgb(3, 169, 244)",
                "fill-outline-color": "rgb(255, 255, 255)"
            }
        },
    }
},
```

使用方式
```js

```