import { 
    NumberType,
    TransitionType,
    ColorType,
    Vecter2Type,
    ExpressionType,
    VisibilityType,
    SkyType
} from '../types/types';

export const skyStyle = {
    layout: {
        'visibility':    VisibilityType
    },
    paint: {
        "sky-type":                     SkyType,
        "sky-atmosphere-sun":           Vecter2Type,
        "sky-atmosphere-sun-intensity": NumberType,
        "sky-gradient-center":          Vecter2Type,
        "sky-gradient-radius":          NumberType,
        "sky-gradient":                 ExpressionType,
        "sky-atmosphere-halo-color":    ColorType,
        "sky-atmosphere-color":         ColorType,
        "sky-opacity":                  NumberType,
        // "sky-opacity-transition":       TransitionType
    }
}