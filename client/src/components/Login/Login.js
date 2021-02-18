import React from 'react';
import './Login.css';
import { useStateValue } from '../../state/Provider';
import { actionTypes } from '../../state/reducer';
import mbLogo from '../../img/mbLogo.webp';
import mbTextLogo from '../../img/mbTextLogo.svg';
import { Button } from '@material-ui/core';
import user from '../../data/user';
import posts from '../../data/posts';

const Login = () => {
    const [dispatch] = useStateValue();

    const signIn = () => {
        dispatch({
            type: actionTypes.SET_USER, 
            user: user 
        }, initPosts());
    }

    const initPosts = () => {
        dispatch({
            type: actionTypes.INIT_POSTS,
            posts: posts
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