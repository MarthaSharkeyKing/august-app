import { createAsyncThunk, createSlice, } from '@reduxjs/toolkit';
import { fetchMarsRoverInfo } from './spaceAPI';

export interface CounterState {
  status: 'idle' | 'loading' | 'failed';
  photos: Array<any>;
}

const initialState: CounterState = {
  status: 'idle',
  photos: []
};

export const getSpaceInformation = createAsyncThunk(
  'space/fetchSpaceInfo',
  async (dispatch, getState) => {
    const response = await fetchMarsRoverInfo();
    return response.data;
  }
);

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getSpaceInformation.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getSpaceInformation.fulfilled, (state, action) => {
        state.status = 'idle';
        state.photos = action.payload.photos
      })
      .addCase(getSpaceInformation.rejected, (state) => {
        state.status = 'failed';
      });
  },
});

export default counterSlice.reducer;
