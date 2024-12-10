import {
    UnknowType, 
    StringType, 
    NumberType,
    ArrayType,
    ObjectType, 
    BooleanType, 
    TilesType,
    BoundsType
} from '../types/types';

export const raster_dem_tile_source = {
    type:           StringType,
    attribution:    StringType,
    bounds:         BoundsType,
    encoding:       ArrayType,
    minzoom:        NumberType,
    maxzoom:        NumberType,
    tiles:          TilesType,
    tileSize:       NumberType,
    url:            StringType,
    volatile:       BooleanType,
}