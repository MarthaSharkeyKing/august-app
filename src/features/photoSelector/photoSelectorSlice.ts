import { createSlice, } from '@reduxjs/toolkit';

export interface PhtotoSelector {
  index: number;
}

const initialState: PhtotoSelector = {
  index: 0
};


export const photoSelectorSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    setIndex: (state, action) => {
      state.index = action.payload;
    },
  },
});

export const { setIndex } = photoSelectorSlice.actions;

export default photoSelectorSlice.reducer;