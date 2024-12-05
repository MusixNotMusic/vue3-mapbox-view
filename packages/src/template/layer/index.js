import { fillStyle } from './fillStyle';
import { lineStyle } from './lineStyle';
import { symbolStyle } from './symbolStyle';
import { circleStyle } from './circleStyle';
import { heatMapStyle } from './heatMapStyle';
import { fillExtrusionStyle } from './fillExtrusionStyle';
import { rasterStyle } from './rasterStyle';
import { rasterParticlesStyle } from './rasterParticleStyle';
import { hillShadeStyle } from './hillShadeStyle';
import { modelStyle } from './modelStyle';
import { backgroundStyle } from './backgroundStyle';
import { skyStyle } from './skyStyle';

import { layer } from './layer';



export const TemplateLayer = layer;

export const styles =  {
    'fill': fillStyle,
    'line': lineStyle,
    'symbol': symbolStyle,
    'circle': circleStyle,
    'heatmap': heatMapStyle,
    'fill-extrusion': fillExtrusionStyle,
    'raster': rasterStyle,
    'raster-particle': rasterParticlesStyle,
    'hillshade': hillShadeStyle,
    'model': modelStyle,
    'background': backgroundStyle,
    'sky': skyStyle
}