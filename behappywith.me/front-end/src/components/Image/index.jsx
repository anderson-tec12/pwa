import React from 'react';
import	'../../img/avatars.png'
export function Image({axisY, axisX, width, height, backgroundHeight, file}) {

  function calcPositionX(){
    const position = axisX  * width * (-1)

    return `${position}px`
  }

  function calcPositionY(){
    const position = axisY  * height * (-1)

    return `${position}px`
  }

  function calcSize(){
    return `auto ${backgroundHeight}px`
  }

  function getStyle(){
    return {
      backgroundImage:	`url(${file})`,
			backgroundPositionX: calcPositionX(),
			backgroundPositionY:calcPositionY(),
		  backgroundSize:	calcSize(),												
			width:	`${width}px`,
			height:	`${height}px`,
			display:	'table',
			margin:	'0	auto'
    }
  }
  
  return (
    <div style={getStyle()}></div>
  )
}