export const raster_title_source = {
    type:           'raster-dem',
    attribution:    { type: String },
    bounds:         { type: [Array, Number] },
    encoding:       { type: Array },
    minzoom:        { type: Number },
    maxzoom:        { type: Number },
    tiles:          { type: [Array, String] },
    tileSize:       { type: Number }
    url:            { type: String },
    volatile:       { type: Boolean },
}