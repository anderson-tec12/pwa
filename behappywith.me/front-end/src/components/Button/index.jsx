import React from 'react';

export function Button(props){
  const styles = {
    boxSizing:'border-box',
    backgroundColor:props.primary ? 	'#2c80b9'	:	'#e6e6e6',
    flaot:props.primary ? 'right'	:	'left',
    marginTop:'10px',
    marginTop:'10px',
    width:'120px',
    height:'38px',
  }

  const classes = {
    
    backgroundColor:props.primary ? 'pure-button	pure-button-primary'	:	'pure-button',
    
  }
  
  return (
    <button 
      className={classes} 
      styles={styles}
      onClick={props.onClick}
    >{props.text}</button>
  )
}