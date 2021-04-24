import React from 'react';
import './Login.css';
import { useStateValue } from '../../state/Provider';
import { actionTypes } from '../../state/reducer';
import mbLogo from '../../img/mbLogo.webp';
import mbTextLogo from '../../img/mbTextLogo.svg';
import { Button } from '@material-ui/core';
import { baseUrl } from '../../shared/baseUrl';
import user from '../../data/user';
import posts from '../../data/posts';

const Login = () => {
    const [state, dispatch] = useStateValue();

    const fetchPosts = (user) => {
        return fetch(baseUrl + 'posts')
            .then(response => {
                if (response.ok) {
                    return response;
                } else {
                    const error = new Error(`Error ${response.status}: ${response.statusText}`);
                    error.response = response;
                    throw error;
                }
            },
            error => {
                const errMess = new Error(error.message);
                throw errMess;
            }
        )
        .then(response => response.json())
        .then(posts => dispatch({
            type: actionTypes.SET_USER, 
            user,
        },dispatch({
            type: actionTypes.INIT_POSTS,
            posts
        })))
        .catch(error => error);
    };
    
    const fetchUser = () => {
        return fetch(baseUrl + 'user')
            .then(response => {
                if (response.ok) {
                    return response;
                } else {
                    const error = new Error(`Error ${response.status}: ${response.statusText}`);
                    error.response = response;
                    throw error;
                }
            },
            error => {
                const errMess = new Error(error.message);
                throw errMess;
            }
        )
        .then(response => response.json())
        .then(user => user)
        .catch(error => error);
    };

    const signIn = () => {
        const user = fetchUser();
        fetchPosts(user);
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