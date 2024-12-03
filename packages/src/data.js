export const mapLayerList = [
    {
        "extend": {
            group: '基础',
            name: '省-线',
            from: 'geoserver',
            order: 3,
            source: {
                id: 'province_line',
                type: "vector",
                // tiles: ['http://222.18.149.126:9030/geoserver/gwc/service/wmts?layer=yw:province_line&style=&tilematrixset=EPSG:900913&Service=WMTS&Request=GetTile&Version=1.0.0&format=application/vnd.mapbox-vector-tile&TileMatrix=EPSG:900913:{z}&TileCol={x}&TileRow={y}'],
                tiles: [`http://222.18.149.126:9030/geoserver/gwc/service/wmts?REQUEST=GetTile&SERVICE=WMTS&VERSION=1.0.0&LAYER=yw:province-line&STYLE=&TILEMATRIXSET=EPSG:900913&format=application/vnd.mapbox-vector-tile&TILEMATRIX=EPSG:900913:{z}&TILECOL={x}&TILEROW={y}`],
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
            group: '基础',
            name: '省-点',
            from: 'geoserver',
            order: 3,
            source: {
                id: 'province_point',
                type: "vector",
                // tiles: ['http://222.18.149.126:9030/geoserver/gwc/service/wmts?layer=yw:province_line&style=&tilematrixset=EPSG:900913&Service=WMTS&Request=GetTile&Version=1.0.0&format=application/vnd.mapbox-vector-tile&TileMatrix=EPSG:900913:{z}&TileCol={x}&TileRow={y}'],
                tiles: [`http://222.18.149.126:9030/geoserver/gwc/service/wmts?REQUEST=GetTile&SERVICE=WMTS&VERSION=1.0.0&LAYER=yw:province-point&STYLE=&TILEMATRIXSET=EPSG:900913&format=application/vnd.mapbox-vector-tile&TILEMATRIX=EPSG:900913:{z}&TILECOL={x}&TILEROW={y}`],
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
            group: '基础',
            name: '市-线',
            from: 'geoserver',
            order: 3,
            source: {
                id: 'district-line',
                type: "vector",
                // tiles: ['http://222.18.149.126:9030/geoserver/gwc/service/wmts?layer=yw:province_line&style=&tilematrixset=EPSG:900913&Service=WMTS&Request=GetTile&Version=1.0.0&format=application/vnd.mapbox-vector-tile&TileMatrix=EPSG:900913:{z}&TileCol={x}&TileRow={y}'],
                tiles: [`http://222.18.149.126:9030/geoserver/gwc/service/wmts?REQUEST=GetTile&SERVICE=WMTS&VERSION=1.0.0&LAYER=yw:district-line&STYLE=&TILEMATRIXSET=EPSG:900913&format=application/vnd.mapbox-vector-tile&TILEMATRIX=EPSG:900913:{z}&TILECOL={x}&TILEROW={y}`],
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
            group: '基础',
            name: '市-点',
            from: 'geoserver',
            order: 3,
            source: {
                id: 'district-point',
                type: "vector",
                // tiles: ['http://222.18.149.126:9030/geoserver/gwc/service/wmts?layer=yw:province_line&style=&tilematrixset=EPSG:900913&Service=WMTS&Request=GetTile&Version=1.0.0&format=application/vnd.mapbox-vector-tile&TileMatrix=EPSG:900913:{z}&TileCol={x}&TileRow={y}'],
                tiles: ['http://222.18.149.126:9030/geoserver/gwc/service/wmts?REQUEST=GetTile&SERVICE=WMTS&VERSION=1.0.0&LAYER=yw:district-point&STYLE=&TILEMATRIX=EPSG:900913:{z}&TILEMATRIXSET=EPSG:900913&format=application/vnd.mapbox-vector-tile&TILECOL={x}&TILEROW={y}'],
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
            group: '基础',
            name: '县-线',
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
            group: '基础',
            name: '县-点',
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
            group: '基础',
            name: '镇-线',
            from: 'geoserver',
            order: 3,
            source: {
                id: 'town-line',
                type: "vector",
                // tiles: ['http://222.18.149.126:9030/geoserver/gwc/service/wmts?layer=yw:province_line&style=&tilematrixset=EPSG:900913&Service=WMTS&Request=GetTile&Version=1.0.0&format=application/vnd.mapbox-vector-tile&TileMatrix=EPSG:900913:{z}&TileCol={x}&TileRow={y}'],
                tiles: [`http://222.18.149.126:9030/geoserver/gwc/service/wmts?REQUEST=GetTile&SERVICE=WMTS&VERSION=1.0.0&LAYER=yw:town-line&STYLE=&TILEMATRIXSET=EPSG:900913&format=application/vnd.mapbox-vector-tile&TILEMATRIX=EPSG:900913:{z}&TILECOL={x}&TILEROW={y}`],
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
            group: '基础',
            name: '镇-点',
            order: 3,
            from: 'geoserver',
            source: {
                id: 'town-point',
                type: "vector",
                // tiles: ['http://222.18.149.126:9030/geoserver/gwc/service/wmts?layer=yw:province_line&style=&tilematrixset=EPSG:900913&Service=WMTS&Request=GetTile&Version=1.0.0&format=application/vnd.mapbox-vector-tile&TileMatrix=EPSG:900913:{z}&TileCol={x}&TileRow={y}'],
                tiles: ['http://222.18.149.126:9030/geoserver/gwc/service/wmts?REQUEST=GetTile&SERVICE=WMTS&VERSION=1.0.0&LAYER=yw:town-point&STYLE=&TILEMATRIX=EPSG:900913:{z}&TILEMATRIXSET=EPSG:900913&format=application/vnd.mapbox-vector-tile&TILECOL={x}&TILEROW={y}'],
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
    {
        "extend": {
            group: '内置地图',
            name: '地形-明',
            from: 'geoserver',
            order: 1,
            source: {
                id: 'hillshade',
                type: "raster",
                tiles: ['http://222.18.149.126:9030/geoserver/gwc/service/wmts?layer=hillshade&style=&tilematrixset=EPSG:900913&Service=WMTS&Request=GetTile&Version=1.0.0&format=image/png&TileMatrix=EPSG:900913:{z}&TileCol={x}&TileRow={y}'],
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
            group: '内置地图',
            name: '地形-暗',
            from: 'geoserver',
            order: 2,
            source: {
                id: 'hillshadeblack',
                type: "raster",
                tiles: ['http://222.18.149.126:9030/geoserver/gwc/service/wmts?layer=hillshadeblack&style=&tilematrixset=EPSG:900913&Service=WMTS&Request=GetTile&Version=1.0.0&format=image/png&TileMatrix=EPSG:900913:{z}&TileCol={x}&TileRow={y}'],
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
            group: '内置地图',
            name: '卫星地图',
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
    {
        "extend": {
            group: '地形地图',
            name: '地形DEM',
            from: 'static-dem',
            type: 'dem',
            order: 0,
            source: {
                id: 'yw-dem',
                type: "raster-dem",
                tiles: ['http://222.18.149.42:9030/mbt/services/trgb/{z}/tiles/{z}/{x}/{y}.png?t=iVsoFtVedqAIhI3EN104'],
                tileSize: 256,
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
    },
    {
        "extend": {
            group: '在线天地地图',
            name: '天地地图',
            from: 'tianditu',
            type: 'raster',
            order: 2,
            source: {
                id: 'tianditu',
                type: "raster",
                tiles: ['http://t5.tianditu.gov.cn/img_w/wmts?&SERVICE=WMTS&REQUEST=GetTile&VERSION=1.0.0&LAYER=img&STYLE=default&TILEMATRIXSET=w&format=tiles&TILEMATRIX={z}&TILEROW={y}&TILECOL={x}&tk=764ade5f6e077396bf2c1231e4ecaf25'],
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
            group: '在线高德地图',
            name: '高德地图',
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
    {
        "extend": {
            group: '其他',
            name: '湖泊',
            from: 'geoserver',
            order: 2,
            source: {
                id: 'lake-area',
                type: "vector",
                // tiles: ['http://222.18.149.126:9030/geoserver/gwc/service/wmts?layer=yw:province_line&style=&tilematrixset=EPSG:900913&Service=WMTS&Request=GetTile&Version=1.0.0&format=application/vnd.mapbox-vector-tile&TileMatrix=EPSG:900913:{z}&TileCol={x}&TileRow={y}'],
                tiles: [`http://222.18.149.126:9030/geoserver/gwc/service/wmts?REQUEST=GetTile&SERVICE=WMTS&VERSION=1.0.0&LAYER=yw:lake-area&STYLE=&TILEMATRIXSET=EPSG:900913&format=application/vnd.mapbox-vector-tile&TILEMATRIX=EPSG:900913:{z}&TILECOL={x}&TILEROW={y}`],
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
    {
        "id": "28",
        "ename": "river1",
        "cname": "一级河流",
        "space": "",
        "layer_name": "river_line1",
        "value": "0",
        "min_zoom": "0",
        "max_zoom": "22",
        "type": "4",
        "e_ctrl": "1",
        "e_zoom_ctrl": "0",
        "zoom_name": " ",
        "zoom": "",
        "layout": {
            "line-cap": "round",
            "line-join": "round",
            "visibility": "none"
        },
        "paint": {
            "line-color": "rgb(102, 153, 255)",
            "line-width": 1,
            "line-opacity": 1
        },
        "layer_id": "1",
        "extend": ""
    },
   
]