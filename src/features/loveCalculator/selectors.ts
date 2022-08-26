import { RootState } from '../../app/store';

export const selectName1 = (state: RootState) => state.loveCalculator.name1

export const selectName2 = (state: RootState) => state.loveCalculator.name2

export const selectPercentage = (state: RootState) => state.loveCalculator.percentage

export const selectRemark = (state: RootState) => state.loveCalculator.remark