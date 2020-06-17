import React from 'react'

const Form = props => {
    const {
        values,
        onInputChange,
        onSubmit,
        disabled,
        onCheckboxChange
    } = props

    console.log(values)
    return (
        <form onSubmit={onSubmit}>
            <p>The form is connected!</p>
            
            <div className='Form-Container'>
                <label>Name:&nbsp;
                    <input
                    type='text'
                    name='username'
                    value={values.username}
                    placeholder='Please Enter Name'
                    onChange={onInputChange}
                    />
                </label>

                <label>Email:&nbsp;
                    <input 
                    type='email'
                    name='email'
                    value={values.email}
                    placeholder="Enter valid Email Address"
                    onChange={onInputChange}
                    />
                </label>

                <label>Password:&nbsp;
                    <input 
                    type='password'
                    name='password'
                    value={values.password}
                    placeholder='Please enter a Password'
                    onChange={onInputChange}
                    />
                </label>

                <label className='ToS'>
                    <input 
                    name='terms'
                    type='checkbox'
                    checked={values.terms}
                    onChange={onCheckboxChange}
                    />
                    I have read and agree to the Terms of Service&nbsp;
                </label>
            </div>
            <div className='SubmitButton'>
                <p>Submit application:</p>
                <button 
                className='Submit'
                disabled={disabled}
                >Apply</button>
            </div>
        </form>
        
    )
}

export default Form