import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import counterReducer from '../features/space/spaceSlice';
import photoSelectorReducer from '../features/photoSelector/photoSelectorSlice';
import loveCalculatorSlice from '../features/loveCalculator/loveCalculatorSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    photoSelector: photoSelectorReducer,
    loveCalculator: loveCalculatorSlice
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
