export const vector_title_source = {
    type: 'vector',
    attribution: { type: String },
    bounds:      { type: [Array, Number] },
    minzoom:     { type: Number },
    maxzoom:     { type: Number },
    promoteId:   { type: Object },
    tiles:       { type: [Array, String] },
    url:         { type: String },
    volatile:    { type: Boolean },
    tileSize:    { type: Number }
}