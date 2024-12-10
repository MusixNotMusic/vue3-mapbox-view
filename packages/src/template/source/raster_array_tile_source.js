import {
    UnknowType, 
    StringType, 
    NumberType,
    ObjectType, 
    BooleanType, 
    TilesType,
    Vecter4Type,
    BoundsType
} from '../types/types';

export const raster_array_tile_source = {
    type:           StringType,
    attribution:    StringType,
    bounds:         BoundsType,
    experimental:   UnknowType,
    minzoom:        NumberType,
    maxzoom:        NumberType,
    scheme:         StringType,
    tiles:          TilesType,
    tileSize:       NumberType,
    url:            StringType,
    volatile:       BooleanType,
}