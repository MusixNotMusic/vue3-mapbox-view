import { geojson_title_source } from './geojson_tile_source';
import { image_source } from './image_source';
import { raster_tile_source } from './raster_tile_source';
import { raster_dem_tile_source } from './raster_dem_tile_source';
import { raster_array_tile_source } from './raster_array_tile_source';
import { vector_tile_source } from './vector_tile_source';
import { video_source } from './video_source';


export const sources =  {
    'vector': vector_tile_source,
    'raster': raster_tile_source,
    'raster-array': raster_array_tile_source,
    'raster-dem': raster_dem_tile_source,
    'geojson': geojson_title_source,
    'image': image_source,
    'video': video_source
}