import {
    UnknowType, 
    StringType,
    LayerType,
    NumberType,
    ObjectType,
    LayoutType,
    PaintType,
    BooleanType, 
    ArrayNumberType,
    ExpressionType
} from '../types/types';

export const layer = {
    id:             StringType,
    type:           LayerType,
    filter:         ExpressionType,
    layout:         LayoutType,
    maxzoom:        NumberType,
    metadata:       UnknowType,
    minzoom:        NumberType,
    paint:          PaintType,
    slot:           StringType,
    source:         StringType,
    "source-layer": StringType,
}