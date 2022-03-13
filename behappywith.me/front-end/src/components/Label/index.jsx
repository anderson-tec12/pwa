import React from 'react';

export function Label(props){
  return ( 
    <label for={props.for}>{props.text}</label>
  )
}