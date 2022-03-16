import React from 'react';

export function Label(props){
  const	estilo	=	{
    color:	props.valorInvalido	?	'#d50000'	:	'#444444'
  };
  
  return ( 
    <label htmlFor={props.htmlFor} style={estilo}>{props.text}</label>
  )
}