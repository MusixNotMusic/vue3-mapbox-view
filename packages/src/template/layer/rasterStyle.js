import { 
    UnknowType, 
    StringType, 
    NumberType,
    TransitionType,
    ExpressionType,
    ColorType,
    BooleanType, 
    ArrayNumberType,
    ArrayStringType,
    ScreenAnchorType,
    Vecter2Type,
    VisibilityType,
    Vecter4Type,
    RasterTextureFilterType
} from '../types/types';

export const rasterStyle = {
    layout: {
        'visibility':    VisibilityType
    },
    paint: {
        "raster-opacity":                   NumberType,
        "raster-opacity-transition":        TransitionType,
        "raster-color":                     ExpressionType,
        "raster-color-mix":                 Vecter4Type,
        "raster-color-mix-transition":      TransitionType,
        "raster-color-range":               Vecter2Type,
        "raster-color-range-transition":    TransitionType,
        "raster-hue-rotate":                NumberType,
        "raster-hue-rotate-transition":     TransitionType,
        "raster-brightness-min":            NumberType,
        "raster-brightness-min-transition": TransitionType,
        "raster-brightness-max":            NumberType,
        "raster-brightness-max-transition": TransitionType,
        "raster-saturation":                NumberType,
        "raster-saturation-transition":     TransitionType,
        "raster-contrast":                  NumberType,
        "raster-contrast-transition":       TransitionType,
        "raster-resampling":                RasterTextureFilterType,
        "raster-fade-duration":             NumberType,
        "raster-emissive-strength":         NumberType,
        "raster-emissive-strength-transition": TransitionType,
        "raster-elevation":                 NumberType,
        "raster-elevation-transition":      TransitionType
    }
}