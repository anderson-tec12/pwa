import React, {useState} from 'react';
import { Input } from '../Input';
import {Label} from '../Label'
import {GenderSelector} from '../GenderSelector'
import {GenderButton} from '../GenderButton'
import UserModel from '../../models/user'

export function NewUser(){
  const [newUser, setUser] = useState({
    user: new UserModel(),
    validate:{
      genareInvalid:false,
      nameInvalid:false
    }
  })

  // const [nameInvalid,setNameInvalid] = useState(false)


  // const [name, setName] = useState('')
  // const [genare, setGenare] = useState('')

  const handleUpdateName = (e) => {

    // setName(e.target.value)
    const updateUser = {...newUser}
    updateUser.user.name = e.target.value
    setUser(updateUser)
    
  }

  const updateGenare = (e, genare_) => {
    e.preventDefault()

    
    const updateUser = {...newUser}
    updateUser.user.genare = genare_
    setUser(updateUser)
    // setGenare(genare_)
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
        valorInvalido={newUser.user.name ? false : true}
        defaultValue={newUser.user.name}
        onChange={handleUpdateName}
			/>

      
        <Label
			  texto="Seu	gênero:"
				valorInvalido={newUser.validate.genareInvalid}
			/>
			
      <GenderSelector
				valueInValid={newUser.validate.genareInvalid}
				genere={newUser.user.genare}
				updateGenare={updateGenare}
			/>
      

      {/* <GenderImage genare="m"/> */}
     {
        // <GenderButton updateGenare={(a = 'a',b = 'b') => console.log(a,b)} genare={'m'} isSelected={false} />
     }
    </form>
  </div>)
}