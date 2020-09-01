import React, { useState } from 'react';
import './style.css';

function App() {
  const [rainToggle, setRainToggle] = useState(false);
  const [vaporToggle, setVaporToggle] = useState(false);

  return (
    <div className='App'>
      <div
        className={`button ${rainToggle ? 'active' : ''}`}
        onClick={() => {
          setRainToggle(!rainToggle);
        }}
      >
        REGN
      </div>
      <div
        className={`button ${vaporToggle ? 'active' : ''}`}
        onClick={() => {
          setVaporToggle(!vaporToggle);
        }}
      >
        DAMP
      </div>
      <div
        className='button'
        onClick={async () => {
          await fetch('http://localhost:3000/');
        }}
      >
        PILS
      </div>
    </div>
  );
}

export default App;
