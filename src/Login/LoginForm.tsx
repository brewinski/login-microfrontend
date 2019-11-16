import React, { useState, FormEvent } from 'react'
import { ToggleButton } from '../Shared/Components/ToggleButton/ToggleButton';
import './LoginForm.css'

const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // TODO: make a request to UPS and Firebase
}

const LoginForm = () => {
    const [emailAddress, setEmailAddress] = useState('');
    const [password, setPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(false);

    return(
        <form 
            className="login-form"
            onSubmit={handleSubmit}>
            <h1>Login</h1>
            <label>
                Email:
                <input 
                    type="text" 
                    value={emailAddress}
                    onChange={e => setEmailAddress(e.target.value)}/>
            </label>
            <label>
                Password:
                <input 
                    type="password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}/>
            </label>
            <label>Remember me?</label> 
            <ToggleButton
            name={'remember-me'}
            isOn={rememberMe} 
            handleToggle={() => setRememberMe(!rememberMe)} />
            <input type="submit" value="Submit"/>
        </form>
    );
}

export {
    LoginForm,
}