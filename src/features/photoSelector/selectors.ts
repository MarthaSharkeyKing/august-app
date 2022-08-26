import { RootState } from '../../app/store';

export const selectIndex = (state: RootState) => state.photoSelector.index ? state.photoSelector.index : 0;