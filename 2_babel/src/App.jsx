import React from 'react';
import './style.scss';

const App = () => {
  const source = 'wind';

  const test = () => {
    const test = param === true || throw new Error("Falsy!");
  }
  
  return (
    <div className="layout">
      <div className="hero">
        <h1>{`Harness the power of ${source}`}</h1>
      </div>
    </div>
  )
}

export default App;
