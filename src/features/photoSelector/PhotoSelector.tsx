import React, { useEffect, useState } from 'react';

import { useAppSelector, useAppDispatch } from '../../app/hooks';
import {
  setIndex,
} from './photoSelectorSlice';

export default function PhotoSelector() {
  const dispatch = useAppDispatch();

  const handleIndexChange = (event: any) => {
    if(event.target.value === "") {
        dispatch(setIndex(1))
    }
    dispatch(setIndex(event.target.value))
  }

  return (
    <div>
        <div>What number picture would you like to see</div>
        <input type="number" onChange={handleIndexChange}></input>
    </div>
   );
}