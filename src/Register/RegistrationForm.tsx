import React from 'react';
import './RegistrationForm.css'

const RegistrationForm = () => {
    return (
        <form
            name="registration-from"
            className="registration-form">
            <h1>Register</h1>
            <label>
                Name:
                <input 
                    type="text"/>
            </label>
            <label>
                Email:
                <input 
                    type="text" />
            </label>
            <label>
                Password:
                <input 
                    type="password" />
            </label>
        </form>
    )
}

export {
    RegistrationForm
}