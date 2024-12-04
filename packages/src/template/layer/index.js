import { fillStyle } from './fillStyle';
import { lineStyle } from './lineStyle';
import { symbolStyle } from './symbolStyle';
import { circleStyle } from './circleStyle';
import { heatMapStyle } from './heatMapStyle';
import { fillExtrusionStyle } from './fillExtrusionStyle';
import { rasterStyle } from './rasterStyle';
import { rasterParticleStyle } from './rasterParticleStyle';
import { hillShadeStyle } from './hillShadeStyle';
import { modelStyle } from './modelStyle';
import { backgroundStyle } from './backgroundStyle';
import { skyStyle } from './skyStyle';

export * as layer from './layer';

export const styles =  {
    'fill': fileStyle,
    'line': lineStyle,
    'symbol': symbolStyle,
    'circle': circleStyle,
    'heatmap': heatMapStyle,
    'fill-extrusion': fillExtrusionStyle,
    'raster': rasterStyle,
    'raster-particle': rasterParticleStyle,
    'hillshade': hillShadeStyle,
    'model': modelStyle,
    'background': backgroundStyle,
    'sky': skyStyle
}