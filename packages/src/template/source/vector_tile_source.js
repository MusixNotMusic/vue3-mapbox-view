import {
    UnknowType, 
    StringType, 
    NumberType,
    ObjectType, 
    BooleanType, 
    ArrayStringType,
    Vecter4Type
} from '../types/types';

export const vector_title_source = {
    type:       'vector',
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