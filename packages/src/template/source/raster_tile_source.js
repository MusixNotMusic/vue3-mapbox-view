export const raster_title_source = {
    type:           'raster',
    attribution:    { type: String },
    bounds:         { type: [Array, Number] },
    experimental:   { type: null },
    minzoom:        { type: Number },
    maxzoom:        { type: Number },
    rasterLayers:   { type: null },
    tiles:          { type: [Array, String] },
    tileSize:       { type: Number }
    url:            { type: String },
    volatile:       { type: Boolean },
}