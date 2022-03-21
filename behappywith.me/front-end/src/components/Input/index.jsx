import React from 'react';

export function Input(props){
  

  const	estilo	=	{
    borderColor:	props.valorInvalido	?	'#d50000'	:	'#cccccc',
    backgroundColor:	props.valorInvalido	?	'#ffcdd2'	:	'#ffffff'
  };

  const	propriedades	=	Object.assign({},props)
  delete propriedades.valorInvalido

 

  return (	<input
    
    {...propriedades}
    style={estilo}
/>)
}