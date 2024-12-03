export const vector_title_source = {
    type:               'geojson',
    attribution:        { type: String },
    buffer:             { type: Number },
    cluster:            { type: Boolean },
    clusterMaxZoom:     { type: Number },
    clusterMinPoints:   { type: Number },
    clusterProperties:  { type: Object },
    clusterRadius:      { type: Number },
    data:               { type: Object },
    dynamic:            { type: Boolean },
    filter:             { type: Object },
    generateId:         { type: Boolean },
    lineMetrics:        { type: Boolean },
    minzoom:            { type: Number },
    maxzoom:            { type: Number },
    promoteId:          { type: Object },
    tolerance:          { type: Number }
}