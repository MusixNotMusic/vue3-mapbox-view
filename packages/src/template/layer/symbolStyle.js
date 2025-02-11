import { 
    UnknowType, 
    StringType, 
    NumberType, 
    BooleanType,
    // image
    ImageType,
    // text
    TextAlignmentType,
    SymbolPlacementType,
    SymbolZOradrType,

    TransitionType,
    ExpressionType,
    ColorType,

    IconTextFitType,

    TextWriteModeType,
    
    // vecter
    Vecter2Type,
    Vecter4Type,
    // array
    ArrayNumberType,
    ArrayStringType,

    ScreenAnchorType,
    AroundAnchorType,

    VisibilityType,
} from '../types/types';

export const symbolStyle = {
    layout: {
        "symbol-placement":         SymbolPlacementType, // "point" | "line" | "line-center"
        "symbol-spacing":           NumberType,
        "symbol-avoid-edges":       BooleanType,
        "symbol-sort-key":          NumberType,
        "symbol-z-order":           SymbolZOradrType, // "auto" | "viewport-y" | "source"
        "symbol-z-elevate":         BooleanType,
        "icon-allow-overlap":       BooleanType,
        "icon-ignore-placement":    BooleanType,
        "icon-optional":            BooleanType,
        "icon-rotation-alignment":  TextAlignmentType,  // "map" | "viewport" | "auto"
        "icon-size":                NumberType,
        "icon-text-fit":            IconTextFitType, // "none" | "width" | "height" | "both"
        "icon-text-fit-padding":    Vecter4Type,    // [number, number, number, number]
        "icon-image":               ImageType,
        "icon-rotate":              NumberType,
        "icon-padding":             NumberType,
        "icon-keep-upright":        BooleanType,
        "icon-offset":              Vecter2Type, // [number, number]
        "icon-anchor":              AroundAnchorType, // "center" | "left" | "right" | "top" | "bottom" | "top-left" | "top-right" | "bottom-left" | "bottom-right"
        "icon-pitch-alignment":     TextAlignmentType,    // "map" | "viewport" | "auto"
        "text-pitch-alignment":     TextAlignmentType,    // "map" | "viewport" | "auto"
        "text-rotation-alignment":  TextAlignmentType,   //  "map" | "viewport" | "auto"
        "text-field":               ExpressionType,
        "text-font":                ArrayStringType,
        "text-size":                NumberType,
        "text-max-width":           NumberType,
        "text-line-height":         NumberType,
        "text-letter-spacing":      NumberType,
        "text-justify":             StringType, //"auto" | "left" | "center" | "right"
        "text-radial-offset":       NumberType,
        "text-variable-anchor":     AroundAnchorType, // "center" | "left" | "right" | "top" | "bottom" | "top-left" | "top-right" | "bottom-left" | "bottom-right",
        "text-anchor":              AroundAnchorType, // "center" | "left" | "right" | "top" | "bottom" | "top-left" | "top-right" | "bottom-left" | "bottom-right",
        "text-max-angle":           NumberType,
        "text-writing-mode":        TextWriteModeType, // "horizontal" | "vertical"
        "text-rotate":              NumberType,
        "text-padding":             NumberType,
        "text-keep-upright":        BooleanType,
        "text-transform":           StringType, //"none" | "uppercase" | "lowercase",
        "text-offset":              Vecter2Type, // <[number, number]>,
        "text-allow-overlap":       BooleanType,
        "text-ignore-placement":    BooleanType,
        "text-optional":            BooleanType,
        "visibility":               VisibilityType, // "visible" | "none"
    },
    paint: {
        "icon-opacity":                      NumberType,
        // "icon-opacity-transition":           TransitionType,
        "icon-occlusion-opacity":            NumberType,
        // "icon-occlusion-opacity-transition": TransitionType,
        "icon-emissive-strength":            NumberType,
        // "icon-emissive-strength-transition": TransitionType,
        "text-emissive-strength":            NumberType,
        // "text-emissive-strength-transition": TransitionType,
        "icon-color":                        ColorType,
        // "icon-color-transition":             TransitionType,
        "icon-halo-color":                   ColorType,
        // "icon-halo-color-transition":        TransitionType,
        "icon-halo-width":                   NumberType,
        // "icon-halo-width-transition":        TransitionType,
        "icon-halo-blur":                    NumberType,
        // "icon-halo-blur-transition":         TransitionType,
        "icon-translate":                    Vecter2Type,
        // "icon-translate-transition":         TransitionType,
        "icon-translate-anchor":             ScreenAnchorType, // <"map" | "viewport">,
        "icon-image-cross-fade":             NumberType,
        // "icon-image-cross-fade-transition":  TransitionType,
        "text-opacity":                      NumberType,
        // "text-opacity-transition":           TransitionType,
        "text-occlusion-opacity":            NumberType,
        // "text-occlusion-opacity-transition": TransitionType,
        "text-color":                        ColorType,
        // "text-color-transition":             TransitionType,
        "text-halo-color":                   ColorType,
        // "text-halo-color-transition":        TransitionType,
        "text-halo-width":                   NumberType,
        // "text-halo-width-transition":        TransitionType,
        "text-halo-blur":                    NumberType,
        // "text-halo-blur-transition":         TransitionType,
        "text-translate":                    Vecter2Type,
        // "text-translate-transition":         TransitionType,
        "text-translate-anchor":             ScreenAnchorType,  // <"map" | "viewport">,
        "icon-color-saturation":             ExpressionType,
        "icon-color-contrast":               ExpressionType,
        "icon-color-brightness-min":         ExpressionType,
        "icon-color-brightness-max":         ExpressionType,
        "symbol-z-offset":                   NumberType,
        // "symbol-z-offset-transition":        TransitionType
    }
}