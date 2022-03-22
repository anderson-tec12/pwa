import React from 'react';
import {Image} from '../Image'

export function GenderImage(props) {
  const {genare} = props
  return <Image 
    axisY={genare === 'm' ? 0 : 1} 
    axisX={0} 
    width={170}
    height={170}
    backgroundHeight={340} 
    file={'img/avatars.png'}
  />
}