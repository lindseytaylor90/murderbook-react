import React from 'react';
import './Login.css';
import { useStateValue } from '../../state/Provider';
import { actionTypes } from '../../state/reducer';
import mbLogo from '../../img/mbLogo.webp';
import mbTextLogo from '../../img/mbTextLogo.svg';
import { Button } from '@material-ui/core';
import user from '../../data/user';


const Login = () => {
    const [state, dispatch] = useStateValue();

    const signIn = () => {
        dispatch({
            type: actionTypes.SET_USER, 
            user: user 
        });
    }

    return (
        <div className="login">
            <div className="loginLogo">
                <img src={mbLogo} alt=""/>
                <img src={mbTextLogo} alt="murderbook"/>
            </div>
            <Button type="submit" onClick={signIn}>
                Sign In
            </Button>
        </div>
    )
}

export default Login;