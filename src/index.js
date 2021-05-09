import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

const element = document.createElement("div");
document.body.appendChild(element);

// const reactElement = document.getElementById('root'); 
console.log(`Main`);
ReactDOM.render(<App />, element);