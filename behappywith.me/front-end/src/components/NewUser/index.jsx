import React, {useState} from 'react';
import { Input } from '../Input';
import {Label} from '../Label'
import {GenderSelector} from '../GenderSelector'
import {Button} from '../Button'

import UserModel from '../../models/user'
import { toast } from 'react-toastify';
export function NewUser(){
  

  const [userName, setUserName] = useState('')
  const [userGenare, setUserGenare] = useState('')
  const [userNameValid, setUserNameValid] = useState(false)
  const [userGenareValid, setUserGenareValid] = useState(false)
  const [primaryViewComplete, setPrimaryViewComplete] = useState(false)


  const handleUpdateName = (e) => {

    // setName(e.target.value)
    // const updateUser = user
    // updateUser.user.name = e.target.value
    setUserName(e.target.value)
    
  }

  const updateGenare = (e, genare_) => {
    e.preventDefault()
    setUserGenare(genare_)
 
  }

  const  renderName = () => {
    return (
      <section>
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
      </section>
    )
  }

  const renderGenare = () => {
    if(primaryViewComplete){
      return null
    }

    return (
      <section>
        <Label
          texto="Seu gênero:"
          valorInvalido={userGenareValid}
        />
			
      <GenderSelector
				valueInValid={userGenareValid}
				genere={userGenare}
				updateGenare={updateGenare}
			/>
      </section>
    )
  }

  const renderButtons = () => {
    if(primaryViewComplete){
      return(
        
         
        <section style={{
          display: 'flex',
          justifyContent: 'space-between'
        }}>
          <Button onClick={e => {
            e.preventDefault();
            setPrimaryViewComplete(false)
          }} text="Voltar"  />

          <Button  text="Salvar"  primary />
        </section>
      
        
      )

      
    }

    return (
      <section>
        <Button onClick={valid} text="Próximo" primary />
      </section>
    )
  }

  const valid = (e) => {
    e.preventDefault()

    let genareIsValid = !["m", "f"].some((item) => item === userGenare)   
    let userNameIsValid = false

    if (
      typeof userName == "string" &&
      userName.length !== 0 &&
      userName.length <= 40
    ) {
      userNameIsValid = false
    }else{
      userNameIsValid = true      
    }

   


    let	msg	=	'';				
		let	isViewComplete	=	false;
    
    if(genareIsValid && userNameIsValid){     
      msg = 'os campos nome e genero estão invalidos'
      setUserGenareValid(true)
      setUserNameValid(true)
    }else if(userNameIsValid){
      msg	=	'Seu	nome	está	inválido!'
      setUserNameValid(true)
    }else if(genareIsValid){
      msg	=	'Selecione	seu	gênero!'
      setUserGenareValid(true)
    }else{
      isViewComplete = true 
    }


    if(!isViewComplete){
      toast.error(msg)
      return 
    }

    setPrimaryViewComplete(true)
    setUserNameValid(false)
    setUserGenareValid(false)
    
  }

  return (
  <div className="center">
    <form className="pure-form pure-form-stacked	">
     {renderName()}
     {renderGenare()}
     {renderButtons()}
    </form>
  </div>)
}