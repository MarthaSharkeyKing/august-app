import React, { useEffect, useState } from 'react';

import { useAppSelector, useAppDispatch } from '../../app/hooks';
import {
  getSpaceInformation,
} from './spaceSlice';
import {selectPhotos} from './selectors'
import {selectIndex} from '../photoSelector/selectors';

export function Space() {
  const photos = useAppSelector(selectPhotos)
  const index = useAppSelector(selectIndex)
  const dispatch = useAppDispatch();

  const handleOnclick = () => {
    dispatch(getSpaceInformation())
  }
  const src = photos.length ? `${photos[index].img_src}` : ''

  return (
    <>
        {photos.length ? (
        <img width={500} height={500} src={src} />
        ) :
        <div>request photos!</div>}
        <button onClick={handleOnclick}>Get Photos</button>
    </>
   );
}
