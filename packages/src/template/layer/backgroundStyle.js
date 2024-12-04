import { 
    NumberType,
    BooleanType,
    StringType,

    TransitionType,
    ColorType,
    Vecter2Type,
    Vecter3Type,
    Vecter5Type,
    ExpressionType,
    VisibilityType,
    ModelType,
    ScreenAnchorType,
} from '../types/types';

export const backgroundStyle = {
    layout: {
        'visibility':    VisibilityType
    },
    paint: {
        "background-pitch-alignment":   ScreenAnchorType,
        "background-color":             ColorType,
        "background-pattern":           StringType,
        "background-opacity":           NumberType,
        "background-emissive-strength": NumberType,
    //     "background-color-transition":               TransitionType,
    //     "background-opacity-transition":             TransitionType,
    //     "background-emissive-strength-transition":   TransitionType
    // }
}