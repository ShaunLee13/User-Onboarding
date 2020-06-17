import React, { useState, useEffect } from 'react';
import './App.css';
import Form from './components/Form';
import * as Yup from 'yup'




const initialDisabled = true


function App() {
  const [ disable, setDisable ] = useState(initialDisabled)



  return (
    <div className="App">
      <header className="App-header">
        <Form disabled={disable}/>
      </header>
    </div>
  );
}

export default App;
