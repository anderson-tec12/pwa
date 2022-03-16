import React from 'react';
import {Label} from '../Label'

export function NewUser(){
  return (<div className="center">
    <form className="pure-form pure-form-stacked	">
      <Label htmlFor="Nome" text="Informe seu nome" />
    </form>
  </div>)
}