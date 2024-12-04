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
    RasterTextureMapType
} from '../types/types';

export const rasterParticlesStyle = {
    layout: {
        'visibility':    VisibilityType
    },
    paint: {
        "raster-particle-array-band":               StringType,
        "raster-particle-count":                    NumberType,
        "raster-particle-color":                    ExpressionType,
        "raster-particle-max-speed":                NumberType,
        "raster-particle-speed-factor":             NumberType,
        // "raster-particle-speed-factor-transition":  TransitionType,
        "raster-particle-fade-opacity-factor":      NumberType,
        // "raster-particle-fade-opacity-factor-transition": TransitionType,
        "raster-particle-reset-rate-factor":        NumberType,
        "raster-particle-elevation":                NumberType,
        // "raster-particle-elevation-transition":     TransitionType
    }
}