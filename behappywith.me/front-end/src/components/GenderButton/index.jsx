import	React	from	'react'
import	{GenderImage}	from	'../GenderImage'
import	'./index.css'

export function GenderButton(props){
  const {updateGenare, genare, isSelected} = props

  return (
    <a 	
      className={isSelected ? "gender-button selected-gender-button" :"gender-button"} 
      href="#!"	 
      onClick={e => updateGenare(e,genare)}>
        <GenderImage genare={genare} />
      </a>
  )
}