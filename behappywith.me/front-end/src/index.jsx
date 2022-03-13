import React from 'react';
import ReactDom from 'react-dom';
import	'./img/favicon.ico';

import	'./css/pure-min.css';
import	'./css/index.css';


import {App} from './App'

const elementRender = document.querySelector('#main')

console.dir(process)
ReactDom.render(<App />, elementRender)