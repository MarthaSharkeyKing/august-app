import { RootState } from '../../app/store';

export const selectPhotos = (state: RootState) => state.counter.photos;