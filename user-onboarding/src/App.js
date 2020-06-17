import React, { useState, useEffect } from 'react';
import './App.css';
import Form from './components/Form';
import * as Yup from 'yup'

const initialDisabled = true
const initialFormValues = {
  username: '',
  email: '',
  password: '',
  terms: false
}


function App() {
  const [ disable, setDisable ] = useState(initialDisabled)
  const [ formValues, setFormValues ] = useState(initialFormValues)
  const [ member, setMember ] = useState([])



  const onInputChange = evt => {
    const { name, value } = evt.target

    setFormValues({
      ...formValues, [name]:value
    })
  }

  const onCheckboxChange = evt => {
    const { name, checked } = evt.target

    setFormValues({
      ...formValues, [name]:checked
    })
  }

  const onSubmit = evt => {
    evt.preventDefault()

    const newMember = {
      username: formValues.username.trim(),
      email: formValues.email.trim(),
      password: formValues.password.trim(),
      terms: formValues.terms
    }
  }


  return (
    <div className="App">
      <header className="App-header">
        <Form 
        disabled={disable} 
        values={formValues} 
        onInputChange={onInputChange}
        onCheckboxChange={onCheckboxChange}
        onSubmit={onSubmit}
        />
      </header>
    </div>
  );
}

export default App;
