import { 
    UnknowType, 
    StringType, 
    NumberType, 
    BooleanType, 
    ArrayNumberType,
    ArrayStringType
} from '../types/types';

export const fillStyle = {
    layout: {
        'fill-sort-key': NumberType,
        'visibility':    ArrayStringType
    },
    paint: {
        'fill-antialias':             BooleanType, 
        'fill-color':                 StringType,
        'fill-emissive-strength':     NumberType,
        'fill-opacity':               NumberType,
        'fill-outline-color':         StringType,
        'fill-pattern':               StringType,
        'fill-translate':             ArrayNumberType,
        'fill-translate-anchor':      ArrayNumberType,
        'fill-z-offset':              NumberType
    }
}