import { createAsyncThunk, createSlice, } from '@reduxjs/toolkit';
import { fetchCompatability } from './loveCalculatorAPI';



export interface LoveCalculator {
  name1: string;
  name2: string;
  status: 'loading' | 'idle' | 'error',
  percentage: string | null,
  remark: string | null
}

const initialState: LoveCalculator = {
  name1: '',
  name2: '',
  status: 'idle',
  percentage: null,
  remark: null
};

export const getCompatability = createAsyncThunk<any, {name1:string, name2:string}>(
    'loveCalculator/getCompatability',
    async ({name1, name2}, {dispatch, getState}) => {
        console.log('in thunk')
      const response = await fetchCompatability(name1, name2);
      return response.data;
    }
  );


export const loveCalculatorSlice = createSlice({
  name: 'loveCalculator',
  initialState,
  reducers: {
    setName1: (state, action) => {
      state.name1 = action.payload;
    },
    setName2: (state, action) => {
        state.name2 = action.payload;
      },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getCompatability.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getCompatability.fulfilled, (state, action) => {
        state.status = 'idle';
        state.percentage = action.payload.percentage;
        state.remark = action.payload.result;
      })
      .addCase(getCompatability.rejected, (state) => {
        state.status = 'error';
      });
  },
});

export const { setName1, setName2 } = loveCalculatorSlice.actions;

export default loveCalculatorSlice.reducer;