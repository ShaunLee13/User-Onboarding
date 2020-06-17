import React, { useState, useEffect } from 'react';
import './App.css';
import Form from './components/Form';
import * as Yup from 'yup'
import formSchema from './validation/FormSchema'
import axios from 'axios'

const initialDisabled = true
const initialFormValues = {
  username: '',
  email: '',
  password: '',
  terms: false
}
const initialErrors = {
  username: '',
  email: '',
  role: '',
  civil: '',
}


function App() {
  const [ disable, setDisable ] = useState(initialDisabled)
  const [ formValues, setFormValues ] = useState(initialFormValues)
  const [ users, setUsers ] = useState([])
  const [ errors, setErrors ] = useState(initialErrors)



  const postMember = newMember => {

    axios.post(`https://reqres.in/api/users`, newMember)
      .then(res => {
        console.log(res)
        setUsers([...users, res.data])
      })
      .catch(err => {
        console.log(err)
        debugger
      })
      .finally(() => {
        setFormValues(initialFormValues)
      })
  }

  const onInputChange = evt => {
    const { name, value } = evt.target

    Yup
    .reach(formSchema, name)
    .validate(value)
    .then(valid => {
      setErrors({
        ...errors,
        [name]: ""
      });
    })
    .catch(err => {
      setErrors({
        ...errors,
        [name]: err.errors[0]
      });
    });
    setFormValues({
      ...formValues,
      [name]: value
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

    postMember(newMember)
  }


  useEffect(() => {
    formSchema.isValid(formValues).then(valid => {
      setDisable(!valid);
    })
  }, [formValues])


  return (
    <div className="App">
      <header className="App-header">
        <Form 
        disabled={disable} 
        values={formValues} 
        onInputChange={onInputChange}
        onCheckboxChange={onCheckboxChange}
        onSubmit={onSubmit}
        errors={errors}
        />
        <pre>
          {JSON.stringify(users)}
        </pre>
      </header>
    </div>
  );
}

export default App;
