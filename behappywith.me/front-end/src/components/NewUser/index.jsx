import React, {useState} from 'react';
import { Input } from '../Input';
import {Label} from '../Label'
import {GenderSelector} from '../GenderSelector'
import {Button} from '../Button'

import UserModel from '../../models/user'
export function NewUser(){
  

  const [userName, setUserName] = useState('')
  const [userGenare, setUserGenare] = useState('')
  const [userNameValid, setUserNameValid] = useState(false)
  const [userGenareValid, setUserGenareValid] = useState(false)


  const handleUpdateName = (e) => {

    // setName(e.target.value)
    // const updateUser = user
    // updateUser.user.name = e.target.value
    setUserName(e.target.value)
    
  }

  const updateGenare = (e, genare_) => {
    e.preventDefault()
    setUserGenare(genare_)
    // setGenare(genare_)
  }

  const valid = (e) => {
    e.preventDefault()
    console.log('O botão proximo foi clicado')
    
    setUserGenareValid(!["m", "f"].some((item) => item === userGenare))


    if (
      typeof userName == "string" &&
      userName.length !== 0 &&
      userName.length <= 3
    ) {
      setUserNameValid(false);
    }else{
      setUserNameValid(true)
    }

    
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
        valorInvalido={userNameValid}
        defaultValue={userName}
        onChange={handleUpdateName}
			/>

      
        <Label
			  texto="Seu gênero:"
				valorInvalido={userGenareValid}
			/>
			
      <GenderSelector
				valueInValid={userGenareValid}
				genere={userGenare}
				updateGenare={updateGenare}
			/>

      <Button onClick={valid} text="Próximo" primary />
      

      {/* <GenderImage genare="m"/> */}
     {
        // <GenderButton updateGenare={(a = 'a',b = 'b') => console.log(a,b)} genare={'m'} isSelected={false} />
     }
    </form>
  </div>)
}