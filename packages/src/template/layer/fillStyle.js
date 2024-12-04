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

export const fillStyle = {
    layout: {
        'fill-sort-key': NumberType,
        'visibility':    VisibilityType
    },
    paint: {
        "fill-antialias":                    BooleanType,
        "fill-opacity":                      NumberType,
        "fill-color":                        ColorType,
        "fill-outline-color":                ColorType,
        "fill-translate":                    Vecter2Type,
        "fill-translate-anchor":             ScreenAnchorType, // <"map" | "viewport">,
        "fill-pattern":                      StringType,
        "fill-emissive-strength":            NumberType,
        "fill-z-offset":                     NumberType,
        // "fill-color-transition":             TransitionType,
        // "fill-opacity-transition":           TransitionType,
        // "fill-outline-color-transition":     TransitionType,
        // "fill-translate-transition":         TransitionType,
        // "fill-emissive-strength-transition": TransitionType,
        // "fill-z-offset-transition":          TransitionType
    }
}