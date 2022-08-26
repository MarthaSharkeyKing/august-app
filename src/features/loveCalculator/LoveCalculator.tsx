import React, { useEffect, useState } from 'react';

import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { getCompatability, setName1, setName2 } from './loveCalculatorSlice';
import { selectName1, selectName2, selectPercentage, selectRemark } from './selectors';


export default function LoveCalculator() {
  const dispatch = useAppDispatch(); 
  const name1 = useAppSelector(selectName1)
  const name2 = useAppSelector(selectName2)
  const percentage = useAppSelector(selectPercentage)
  const remark = useAppSelector(selectRemark)

  const handleNameOneChange = (event: any) => {
    dispatch(setName1(event.target.value));
  }

  const handleNameTwoChange = (event: any) => {
    dispatch(setName2(event.target.value));
    }

    const handleOnClick = () => {
        dispatch(getCompatability({name1, name2}))
    }


  return (
    <div>
        <div>Name 1</div>
        <input onChange={handleNameOneChange}></input>

        <div>Name 2</div>
        <input onChange={handleNameTwoChange}></input>

        <button onClick={handleOnClick}>calculate love</button>

        <div>
            <div>Results:</div>
            {percentage}
            {remark}
        </div>
    </div>
   );
}