import {
    UnknowType, 
    StringType, 
    NumberType,
    ObjectType, 
    BooleanType, 
    ArrayNumberType,
    StringNumberType
} from '../types/types';

export const layer = {
    id:             StringType,
    type:           StringType,
    filter:         StringNumberType,
    layout:         ObjectType,
    maxzoom:        NumberType,
    metadata:       UnknowType,
    minzoom:        NumberType,
    paint:          ObjectType,
    slot:           StringType,
    source:         StringType,
    "source-layer": StringType,
}