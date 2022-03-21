import React, {useState} from 'react';
import { Input } from '../Input';
import {Label} from '../Label'

export function NewUser(){
  const [nameInvalid,setNameInvalid] = useState(true)
  const [name, setName] = useState('')

  const handleUpdateName = (e) => {

    setName(e.target.value)
    
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
    </form>
  </div>)
}