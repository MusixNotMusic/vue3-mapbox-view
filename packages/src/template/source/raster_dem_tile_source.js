import {
    UnknowType, 
    StringType, 
    NumberType,
    ArrayType,
    ObjectType, 
    BooleanType, 
    ArrayStringType,
    Vecter4Type
} from '../types/types';

export const raster_dem_tile_source = {
    type:           StringType,
    attribution:    StringType,
    bounds:         Vecter4Type,
    encoding:       ArrayType,
    minzoom:        NumberType,
    maxzoom:        NumberType,
    tiles:          ArrayStringType,
    tileSize:       NumberType,
    url:            StringType,
    volatile:       BooleanType,
}