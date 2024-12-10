import {
    UnknowType, 
    StringType, 
    NumberType,
    ObjectType, 
    BooleanType, 
    TilesType,
    BoundsType
} from '../types/types';

export const vector_tile_source = {
    type:        StringType,
    attribution: StringType,
    bounds:      BoundsType,
    minzoom:     NumberType,
    maxzoom:     NumberType,
    promoteId:   ObjectType,
    tiles:       TilesType,
    url:         StringType,
    volatile:    BooleanType,
    tileSize:    NumberType
}