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
} from '../types/types';

export const modelStyle = {
    layout: {
        "model-id":      StringType,
        'visibility':    VisibilityType
    },
    paint: {
        "model-opacity":                        NumberType,
        "model-rotation":                       Vecter3Type,
        "model-scale":                          Vecter3Type,
        "model-translation":                    Vecter3Type,
        "model-color":                          ColorType,
        "model-color-mix-intensity":            NumberType,
        "model-type":                           ModelType,
        "model-cast-shadows":                   BooleanType,
        "model-receive-shadows":                BooleanType,
        "model-ambient-occlusion-intensity":    NumberType,
        "model-emissive-strength":              NumberType,
        "model-roughness":                      NumberType,
        "model-height-based-emissive-strength-multiplier":  Vecter5Type,
        "model-cutoff-fade-range":              ExpressionType,
        "model-front-cutoff":                   Vecter3Type
        // "model-color-transition":               TransitionType,
        // "model-rotation-transition":            TransitionType,
        // "model-opacity-transition":             TransitionType,
        // "model-scale-transition":               TransitionType,
        // "model-translation-transition":         TransitionType,
        // "model-color-mix-intensity-transition": TransitionType,
        // "model-ambient-occlusion-intensity-transition": TransitionType,
        // "model-emissive-strength-transition":   TransitionType,
        // "model-roughness-transition":           TransitionType,
        // "model-height-based-emissive-strength-multiplier-transition": TransitionType,
    }
}