import {
    UnknowType, 
    StringType, 
    NumberType,
    ObjectType, 
    BooleanType, 
    ArrayStringType,
    Vecter4Type
} from '../types/types';

export const raster_title_source = {
    type:           'raster',
    attribution:    StringType,
    bounds:         Vecter4Type,
    experimental:   UnknowType,
    minzoom:        NumberType,
    maxzoom:        NumberType,
    rasterLayers:   UnknowType,
    tiles:          ArrayStringType,
    tileSize:       NumberType
    url:            StringType,
    volatile:       BooleanType,
}