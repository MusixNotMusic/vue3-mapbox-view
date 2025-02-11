export const style = {
    version: 8,
    name: "china",
    glyphs: "/{fontstack}/{range}.pbf",
    sources: {},
    layers: []
}

export const defaultInitParams = {
    zoom: 5,
    maxZoom: 16,
    minZoom: 2,
    pitch: 0,
    bearing: 0.8,
    curve: 1,
    center: [103.980679, 30.482537],
    style: style,
    accessToken: null
}

export const defaultEnableEvent = {
    dragRotate: true,
    dragPan: true,
    doubleClickZoom: true,
    touchZoomRotate: true,
}