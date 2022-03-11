import React from 'react';
import ReactDom from 'react-dom';
import	'./img/favicon.ico';

import	'./css/pure-min.css';
import	'./css/index.css';

const elementRender = document.querySelector('#main')

console.dir(process)
ReactDom.render(	<h1>Bem-vindo	ao	React!</h1>, elementRender)