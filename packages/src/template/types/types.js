export const UnknowType =       { type: undefined };
export const StringType =       { type: String };
export const NumberType =       { type: Number };
export const BooleanType =      { type: Boolean };
export const ObjectType =       { type: Object };
export const ArrayType =        { type: Array };
export const ArrayStringType =  { type: [Array, String] };
export const ArrayNumberType =  { type: [Array, Number] };


// Image
export const ImageType =  { type: Image };

export class TransitionType{
    constructor() {
        this.duration = 0;
        this.delay = 0;
    }
}

export class ColorType {
    constructor() {
        this.rgba = '#fff';
    }
}

export class ExpressionType {
    constructor() {
        this.rgba = '#fff';
    }
}

export class Vecter2Type {
    constructor() {
        this.value = [0, 0];
    }
}
export class Vecter3Type {
    constructor() {
        this.value = [0, 0, 0];
    }
}
export class Vecter4Type {
    constructor() {
        this.value = [0, 0, 0, 0];
    }
}

export class Vecter5Type {
    constructor() {
        this.value = [0, 0, 0, 0, 0];
    }
}

/**
 * 窗口锚点: 
 * 1. map 地图坐标
 * 2. viewport 电脑屏幕
 */
export class ScreenAnchorType {
    constructor() {
        this.value = 'map';
        this.list = ['map', 'viewpost']
    }
}

// 周围锚点
export class AroundAnchorType {
    constructor() {
        this.value = 'center';
        this.list = ["center", "left", "right", "top", "bottom", "top-left", "top-right", "bottom-left", "bottom-right"]
    }
}

export class VisibilityType {
    constructor() {
        this.value = 'visible';
        this.list = ['visible', 'none']
    }
}

// Line

//https://docs.mapbox.com/style-spec/reference/layers/#layout-line-line-join
export class LineJoinType {
    constructor() {
        this.value = 'miter';
        this.list = ['bevel', 'round', 'miter', 'none']
    }
}

// https://docs.mapbox.com/style-spec/reference/layers/#layout-line-line-cap
export class LineCapType {
    constructor() {
        this.value = 'butt';
        this.list = ['butt', 'round', 'square']
    }
}

// Symbol
//https://docs.mapbox.com/style-spec/reference/layers/#layout-line-line-join
export class LineJoinType {
    constructor() {
        this.value = 'miter';
        this.list = ['bevel', 'round', 'miter', 'none']
    }
}

// https://docs.mapbox.com/style-spec/reference/layers/#layout-symbol-symbol-placement
export class SymbolPlacementType {
    constructor() {
        this.value = 'point';
        this.list = ['point', 'line', 'line-center']
    }
}

// https://docs.mapbox.com/style-spec/reference/layers/#layout-symbol-symbol-placement
export class SymbolZOradrType {
    constructor() {
        this.value = 'auto';
        this.list = ['auto', 'viewport-y', 'source']
    }
}

// https://docs.mapbox.com/style-spec/reference/layers/#layout-symbol-icon-text-fit
export class IconTextFitType {
    constructor() {
        this.value = 'none';
        this.list = ["none" | "width" | "height" | "both"]
    }
}

export class TextAlignmentType {
    constructor() {
        this.value = 'auto';
        this.list = ["map", "viewport", "auto"]
    }
}


// Raster
export class RasterTextureFilterType {
    constructor() {
        this.value = 'linear';
        this.list = ["linear", "nearest"]
    }
}

// fill extrusion alignment

export class FillExtrusionAligmentType {
    constructor() {
        this.value = 'terrain';
        this.list = ["terrain", "flat"]
    }
}

// sky type
export class SkyType {
    constructor() {
        this.value = 'atmosphere';
        this.list = ["gradient", "atmosphere"]
    }
}


// model type
export class ModelType {
    constructor() {
        this.value = 'atmosphere';
        this.list = ["gradient", "atmosphere"]
    }
}