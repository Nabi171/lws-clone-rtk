import { configureStore } from '@reduxjs/toolkit';
import videosReducer from '../features/videos/videosSlice';
import videoReducer from '../features/video/videoSlice';
import tagsReducer from '../features/tags/tagsSlice';
import relatedVideosReuducer from "../features/relatedVideos/relatedVideosSlice"
import filterReuducer from "../features/filter/filterSlice"
export const store = configureStore({
  reducer: {
    videos: videosReducer,
    tags: tagsReducer,
    video: videoReducer,
    relatedVideos: relatedVideosReuducer,
    filter: filterReuducer,
  },
});