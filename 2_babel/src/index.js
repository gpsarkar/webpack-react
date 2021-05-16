import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

const version = "__VERSION__";
console.log(`Website version is: ${version}`);

const rootElement = document.querySelector('#root');
ReactDOM.render(<App/>, rootElement);