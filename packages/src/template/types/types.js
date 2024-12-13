import Unknow  from '../compoents/base/Unknow.vue';
import String  from '../compoents/base/String.vue';
import Number  from '../compoents/base/Number.vue';
import Boolean  from '../compoents/base/Boolean.vue';
import Color from '../compoents/base/Color.vue';
import StringSelect from '../compoents/base/StringSelect.vue';

import ArrayString from '../compoents/base/ArrayString.vue';

import Bounds  from '../compoents/base/Bounds.vue'

import Tiles from '../compoents/base/Tiles.vue';

import Layout  from '../compoents/Layout.vue';
import Paint  from '../compoents/Paint.vue';

import { markRaw } from 'vue';



export class Type {
    constructor() {
        this.value = null;
    }
    setValue (val) {
        if (this.value !== val) {
            this.value = val;
        }
    }

    // get value() {
    //     return this.value
    // }
}

export class UnknowType extends Type{
    constructor() {
        super();
        this.value = '';
        this.component = markRaw(Unknow);
    }
}

export class StringType extends Type{
    constructor(value) {
        super();
        this.value = value || '';
        this.component = markRaw(String);
    }
}

export class NumberType extends Type{
    constructor(value) {
        super();
        this.value = value || 0;
        this.component = markRaw(Number);
    }
}


export class BooleanType extends Type{
    constructor() {
        super();
        this.value = '';
        this.component = markRaw(Boolean);
    }
}

export class ObjectType extends Type{
    constructor() {
        super();
        this.value = '';
    }
}


export class ArrayType extends Type{
    constructor() {
        super();
        this.value = '';
    }
}

export class ArrayStringType extends Type{
    constructor() {
        super();
        this.value = '';
        this.component = markRaw(ArrayString);
    }
}

export class ArrayNumberType extends Type{
    constructor() {
        super();
        this.value = '';
        this.component = markRaw(ArrayString);
    }
}

export class BoundsType extends Type{
    constructor() {
        super();
        this.value = [];
        this.component = markRaw(Bounds);
    }
}

/**
 * layer layout 
 */
export class LayoutType extends Type{
    constructor() {
        super();
        this.value = '';
        this.component = markRaw(Layout);
    }
}

/**
 * layer paint 
 */
export class PaintType extends Type{
    constructor() {
        super();
        this.value = '';
        this.component = markRaw(Paint);
    }
}

/**
 * tiles 
 */
 export class TilesType extends Type{
    constructor() {
        super();
        this.value = '';
        this.component = markRaw(Tiles);
    }
}


// Image
export class ImageType{
    constructor() {
        this.value = '';
    }
}

export class TransitionType{
    constructor() {
        this.duration = 0;
        this.delay = 0;
    }
}

export class ColorType extends Type{
    constructor() {
        super();
        this.value = '#fff';
        this.component = markRaw(Color);
    }
}

export class ExpressionType {
    constructor() {
        this.value = '#fff';
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

export class VisibilityType extends Type{
    constructor() {
        super();
        this.value = 'visible';
        this.list = ['visible', 'none'],
        this.component = markRaw(StringSelect);
    }
}

// layer type

export class LayerType extends Type {
    constructor() {
        super();
        this.value = 'fill';
        this.list = [ 'fill', 'line', 'symbol', 'circle', 'heatmap','fill-extrusion', 'raster', 'raster-particle', 'hillshade', 'model', 'background', 'sky'],
        this.component = markRaw(StringSelect);
    }
}

// Line

//https://docs.mapbox.com/style-spec/reference/layers/#layout-line-line-join
export class LineJoinType {
    constructor() {
        this.value = 'miter';
        this.list = ['bevel', 'round', 'miter', 'none']
        this.component = markRaw(StringSelect);
    }
}

// https://docs.mapbox.com/style-spec/reference/layers/#layout-line-line-cap
export class LineCapType {
    constructor() {
        this.value = 'butt';
        this.list = ['butt', 'round', 'square']
        this.component = markRaw(StringSelect);
    }
}

// Symbol
//https://docs.mapbox.com/style-spec/reference/layers/#layout-line-line-join
export class TextWriteModeType {
    constructor() {
        this.value = 'horizontal';
        this.list = ['horizontal', 'vertical']
        this.component = markRaw(StringSelect);
    }
}

// https://docs.mapbox.com/style-spec/reference/layers/#layout-symbol-symbol-placement
export class SymbolPlacementType {
    constructor() {
        this.value = 'point';
        this.list = ['point', 'line', 'line-center']
        this.component = markRaw(StringSelect);
    }
}

// https://docs.mapbox.com/style-spec/reference/layers/#layout-symbol-symbol-placement
export class SymbolZOradrType {
    constructor() {
        this.value = 'auto';
        this.list = ['auto', 'viewport-y', 'source']
        this.component = markRaw(StringSelect);
    }
}

// https://docs.mapbox.com/style-spec/reference/layers/#layout-symbol-icon-text-fit
export class IconTextFitType {
    constructor() {
        this.value = 'none';
        this.list = ["none" | "width" | "height" | "both"]
        this.component = markRaw(StringSelect);
    }
}

export class TextAlignmentType {
    constructor() {
        this.value = 'auto';
        this.list = ["map", "viewport", "auto"]
        this.component = markRaw(StringSelect);
    }
}


// Raster
export class RasterTextureFilterType {
    constructor() {
        this.value = 'linear';
        this.list = ["linear", "nearest"]
        this.component = markRaw(StringSelect);
    }
}

// fill extrusion alignment

export class FillExtrusionAligmentType {
    constructor() {
        this.value = 'terrain';
        this.list = ["terrain", "flat"]
        this.component = markRaw(StringSelect);
    }
}

// sky type
export class SkyType {
    constructor() {
        this.value = 'atmosphere';
        this.list = ["gradient", "atmosphere"]
        this.component = markRaw(StringSelect);
    }
}


// model type
export class ModelType {
    constructor() {
        this.value = 'common-3d';
        this.list = ["common-3d", "location-indicator"]
        this.component = markRaw(StringSelect);
    }
}