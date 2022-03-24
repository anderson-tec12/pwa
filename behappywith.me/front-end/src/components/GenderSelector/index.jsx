import React from 'react';
import {GenderButton} from '../GenderButton'


export function GenderSelector(props){
  const {genere, valueInValid, updateGenare} = props;
  const masc = genere === 'm'; 
  const fem = genere === 'f'

  const color = valueInValid ? '#D50000' : '#CCCCCC';
  const style = {
    boxSizing:	'border-box',
		border:	`1px	solid	${color}`,
		borderRadius:	'5px',
		padding:	'3px',
		paddingBottom:	'0'
  }

  return (
    <div style={style}>
      <GenderButton updateGenare={updateGenare} genare="m" isSelected={masc}/>
      <GenderButton updateGenare={updateGenare} genare="f" isSelected={fem}/>
    </div>
  )
}