import {
    UnknowType, 
    StringType, 
    NumberType,
    ArrayType,
    ObjectType, 
    BooleanType, 
    TilesType,
    Vecter4Type
} from '../types/types';

export const raster_dem_tile_source = {
    type:           StringType,
    attribution:    StringType,
    bounds:         Vecter4Type,
    encoding:       ArrayType,
    minzoom:        NumberType,
    maxzoom:        NumberType,
    tiles:          TilesType,
    tileSize:       NumberType,
    url:            StringType,
    volatile:       BooleanType,
}