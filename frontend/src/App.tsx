import React, { useState } from 'react';
import './style.css';
import axios from 'axios';

function App() {
  const [rainToggle, setRainToggle] = useState(false);
  const [vaporToggle, setVaporToggle] = useState(false);

  return (
    <div className='App'>
      <div
        className={`button ${rainToggle ? 'active' : ''}`}
        onClick={async () => {
          setRainToggle(!rainToggle);
          await axios.post('http://localhost:3000/', {
            message: 'regn'
          });
        }}
      >
        REGN
      </div>
      <div
        className={`button ${vaporToggle ? 'active' : ''}`}
        onClick={async () => {
          setVaporToggle(!vaporToggle);
          await axios.post('http://localhost:3000/', {
            message: 'damp'
          });
        }}
      >
        DAMP
      </div>
    </div>
  );
}

export default App;
