import React from 'react';

import {Header} from './components/Header'
import {NewUser} from './components/NewUser'
import {Toast} from './components/Toast'

export function App(){
  return (
    <div>
      <Header /> 
      <NewUser />
      <Toast />
    </div>
  )
}


