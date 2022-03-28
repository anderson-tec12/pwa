import React, {useState} from 'react';
import { Input } from '../Input';
import {Label} from '../Label'
import {GenderSelector} from '../GenderSelector'
import {GenderButton} from '../GenderButton'

export function NewUser(){
  const [nameInvalid,setNameInvalid] = useState(false)
  const [genareInvalid, setGenareInvalid] = useState(false)

  const [name, setName] = useState('')
  const [genare, setGenare] = useState('')

  const handleUpdateName = (e) => {

    setName(e.target.value)
    
  }

  const updateGenare = (e, genare_) => {
    e.preventDefault()
    setGenare(genare_)
  }

  return (
  <div className="center">
    <form className="pure-form pure-form-stacked	">
      <Label htmlFor="Nome" text="Informe seu nome" />
      <Input
        id="nome"
        placeholder="Digite seu nome"
        maxLength="40"
        readOnly={false}
        valorInvalido={name ? false : nameInvalid}
        defaultValue={name}
        onChange={handleUpdateName}
			/>

      
        <Label
			  texto="Seu	gênero:"
				valorInvalido={genareInvalid}
			/>
			
      <GenderSelector
				valueInValid={genareInvalid}
				genere={genare}
				updateGenare={updateGenare}
			/>
      

      {/* <GenderImage genare="m"/> */}
     {
        // <GenderButton updateGenare={(a = 'a',b = 'b') => console.log(a,b)} genare={'m'} isSelected={false} />
     }
    </form>
  </div>)
}