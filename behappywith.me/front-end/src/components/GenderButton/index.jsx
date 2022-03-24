import	React	from	'react'
import	'./index.css'
import	GenderImage	from	'../GenderImage'

function GenderButton(props){
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