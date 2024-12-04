import { 
    NumberType,
    TransitionType,
    ColorType,
    ExpressionType,
    VisibilityType
} from '../types/types';

export const heatMapStyle = {
    layout: {
        'visibility':    VisibilityType
    },
    paint: {
        "heatmap-radius":       NumberType,
        "heatmap-weight":       NumberType,
        "heatmap-intensity":    NumberType,
        "heatmap-color":        ExpressionType,
        "heatmap-opacity":      NumberType,
        // "heatmap-radius-transition": TransitionType,
        // "heatmap-intensity-transition": TransitionType,
        // "heatmap-opacity-transition": TransitionType
    }
}