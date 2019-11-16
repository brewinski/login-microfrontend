import React, { useState } from 'react';
import './App.css';
import styled, { ThemeProvider } from 'styled-components';
import Modal from 'react-modal';
import { DefaultButton } from './Shared/Components/Buttons';
import { LoginForm } from './Login/LoginForm';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import { RegistrationForm } from './Register/RegistrationForm';

// We are passing a default theme for Buttons that arent wrapped in the ThemeProvider
// Button.defaultProps = defaultTheme;
const colors = {
  background: '#282c34',
  foreground: '#FFFFFF',
  primary: 'palevioletred',
  secondary: 'purple',
  default: 'green'
}

const lightTheme = {
  foreground: colors.foreground,
  background: colors.background,
  primary: colors.primary,
  secondary: colors.secondary,
  default: colors.default,
  toggle: {
    background: 'silver',
    onColor: 'palevioletred',
    toggle: '#fff'
  }
};

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)',
    width                 : '80vh',
    height                : '80vh',
    padding               : '0'
  }
};

const App: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <ThemeProvider theme={lightTheme}>
      <div>
        <div className="App">
          <DefaultButton onClick={() => setIsOpen(!isOpen)}>open modal</DefaultButton>
          <Router>
            <Link to="/login">Login</Link>
            <Link to="/register">sign up</Link>
            <Route exact path="/login" component={() => <div>Login</div>}/>
            <Route exact path="/register" component={() => <div>Sign Up</div>}/>
            <Modal 
              isOpen={isOpen}
              style={customStyles}>
              <div className="modalHead">
                <DefaultButton onClick={() => setIsOpen(!isOpen)}>close</DefaultButton>
              </div>
              <div className="modalBody">
                <Route exact path="/login" component={LoginForm}/>
                <Route exact path="/register" component={RegistrationForm}/>
              </div>
            </Modal>
          </Router>
        </div>
      </div>
    </ThemeProvider>
  )
};

export default App;
