import {
    UnknowType, 
    StringType, 
    NumberType,
    ObjectType, 
    BooleanType, 
    TilesType,
    BoundsType
} from '../types/types';

export const raster_tile_source = {
    type:           StringType,
    attribution:    StringType,
    bounds:         BoundsType,
    experimental:   UnknowType,
    minzoom:        NumberType,
    maxzoom:        NumberType,
    rasterLayers:   UnknowType,
    tiles:          TilesType,
    tileSize:       NumberType,
    url:            StringType,
    volatile:       BooleanType,
}