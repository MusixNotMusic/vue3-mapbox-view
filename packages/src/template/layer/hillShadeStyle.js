import { 
    NumberType,
    TransitionType,
    ColorType,
    ScreenAnchorType,
    VisibilityType
} from '../types/types';

export const hillShadeStyle = {
    layout: {
        'visibility':    VisibilityType
    },
    paint: {
        "hillshade-exaggeration":           NumberType,
        "hillshade-shadow-color":           ColorType,
        "hillshade-highlight-color":        ColorType,
        "hillshade-accent-color":           ColorType,
        "hillshade-emissive-strength":      NumberType,
        // "hillshade-illumination-direction": NumberType,
        // "hillshade-illumination-anchor":    ScreenAnchorType,
        // "hillshade-exaggeration-transition": TransitionType,
        // "hillshade-shadow-color-transition": TransitionType,
        // "hillshade-highlight-color-transition": TransitionType,
        // "hillshade-accent-color-transition": TransitionType,
        // "hillshade-emissive-strength-transition": TransitionType
    }
}