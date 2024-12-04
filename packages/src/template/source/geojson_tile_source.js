import {
    UnknowType, 
    StringType, 
    NumberType,
    ObjectType, 
    BooleanType, 
    ArrayNumberType,
    ExpressionType
} from '../types/types';

export const geojson_title_source = {
    type:               'geojson',
    attribution:        StringType,
    buffer:             NumberType,
    cluster:            BooleanType,
    clusterMaxZoom:     NumberType,
    clusterMinPoints:   NumberType,
    clusterProperties:  ObjectType,
    clusterRadius:      NumberType,
    data:               ObjectType,
    dynamic:            BooleanType,
    filter:             ObjectType,
    generateId:         BooleanType,
    lineMetrics:        BooleanType,
    minzoom:            NumberType,
    maxzoom:            NumberType,
    promoteId:          ObjectType,
    tolerance:          NumberType
}