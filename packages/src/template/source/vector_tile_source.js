import {
    UnknowType, 
    StringType, 
    NumberType,
    ObjectType, 
    BooleanType, 
    TilesType,
    Vecter4Type
} from '../types/types';

export const vector_tile_source = {
    type:        StringType,
    attribution: StringType,
    bounds:      Vecter4Type,
    minzoom:     NumberType,
    maxzoom:     NumberType,
    promoteId:   ObjectType,
    tiles:       TilesType,
    url:         StringType,
    volatile:    BooleanType,
    tileSize:    NumberType
}