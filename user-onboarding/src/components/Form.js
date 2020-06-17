import React from 'react'

const Form = props => {
    const {
        disabled
    } = props

    return (
        <div>
            <p>The form is connected!</p>
            
            <div className='Form-Container'>
                <label>Name:&nbsp;
                    <input />
                </label>

                <label>Email:&nbsp;
                    <input />
                </label>

                <label>Password:&nbsp;
                    <input />
                </label>

                <label className='ToS'>
                    <input type='checkbox' />
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
        </div>
        
    )
}

export default Form