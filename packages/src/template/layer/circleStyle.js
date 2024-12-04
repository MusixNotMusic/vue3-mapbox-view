import { 
    UnknowType, 
    StringType, 
    NumberType,
    TransitionType,
    ColorType,
    BooleanType, 
    ArrayNumberType,
    ArrayStringType,
    ScreenAnchorType,
    Vecter2Type,
    VisibilityType
} from '../types/types';

export const circleStyle = {
    layout: {
        "circle-sort-key":                     NumberType,
        'visibility':                          VisibilityType
    },
    paint: {
        "circle-radius":                       NumberType,
        "circle-color":                        ColorType,
        "circle-blur":                         NumberType,
        "circle-opacity":                      NumberType,
        "circle-translate":                    Vecter2Type,
        "circle-translate-anchor":             ScreenAnchorType,
        "circle-pitch-scale":                  ScreenAnchorType,
        "circle-pitch-alignment":              ScreenAnchorType,
        "circle-stroke-width":                 NumberType,
        "circle-stroke-color":                 ColorType,
        "circle-stroke-opacity":               NumberType,
        "circle-emissive-strength":            NumberType,
        // "circle-radius-transition":            TransitionType,
        // "circle-color-transition":             TransitionType,
        // "circle-blur-transition":              TransitionType,
        // "circle-opacity-transition":           TransitionType,
        // "circle-translate-transition":         TransitionType,
        // "circle-stroke-width-transition":      TransitionType,
        // "circle-stroke-color-transition":      TransitionType,
        // "circle-stroke-opacity-transition":    TransitionType,
        // "circle-emissive-strength-transition": TransitionType
    }
}