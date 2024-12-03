import { 
    UnknowType, 
    StringType, 
    NumberType, 
    BooleanType, 
    ArrayNumberType,
    ArrayStringType,
    StringNumberType
} from '../types/types';

export const lineStyle = {
    layout: {
        'line-cap':                   ArrayStringType,
        'line-round-limit':           NumberType,
        'line-sort-key':              NumberType,
        'line-z-offset':              NumberType,
        'visibility':                 StringType,
    },
    paint: {
        'line-blur':                  BooleanType,
        'line-color':                 StringType,
        'line-dasharray':             ArrayNumberType,
        'line-emissive-strength':     NumberType,
        'line-gap-width':             NumberType,
        'line-gradient':              StringType,
        'line-join':                  StringType,
        'line-miter-limit':           NumberType,
        'line-occlusion-opacity':     NumberType,
        'line-offset':                NumberType,
        'line-opacity':               NumberType,
        'line-pattern':               UnknowType,
        'line-translate':             ArrayNumberType,
        'line-translate-anchor':      StringType,
        'line-trim-color':            StringType,
        'line-trim-fade-range':       ArrayNumberType,
        'line-trim-offset':           ArrayNumberType,
        'line-width':                 NumberType
    }
}