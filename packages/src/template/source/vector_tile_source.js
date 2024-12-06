import {
    UnknowType, 
    StringType, 
    NumberType,
    ObjectType, 
    BooleanType, 
    ArrayStringType,
    Vecter4Type
} from '../types/types';

export const vector_tile_source = {
    type:        StringType,
    attribution: StringType,
    bounds:      Vecter4Type,
    minzoom:     NumberType,
    maxzoom:     NumberType,
    promoteId:   ObjectType,
    tiles:       ArrayStringType,
    url:         StringType,
    volatile:    BooleanType,
    tileSize:    NumberType
}