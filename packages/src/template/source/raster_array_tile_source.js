import {
    UnknowType, 
    StringType, 
    NumberType,
    ObjectType, 
    BooleanType, 
    TilesType,
    Vecter4Type
} from '../types/types';

export const raster_array_tile_source = {
    type:           StringType,
    attribution:    StringType,
    bounds:         Vecter4Type,
    experimental:   UnknowType,
    minzoom:        NumberType,
    maxzoom:        NumberType,
    scheme:         StringType,
    tiles:          TilesType,
    tileSize:       NumberType,
    url:            StringType,
    volatile:       BooleanType,
}