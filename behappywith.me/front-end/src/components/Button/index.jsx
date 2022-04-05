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
    color:props.primary && 	'#e6e6e6',
    border:'none'
  }

  const classes = {
    
    backgroundColor:props.primary ? 'pure-button	pure-button-primary'	:	'pure-button',
    
  }
  
  return (
    <button 
      className={classes} 
      style={styles}
      onClick={props.onClick}
    >{props.text}</button>
  )
}