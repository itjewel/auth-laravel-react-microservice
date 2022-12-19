import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


export default function AuthUser(){
    const navigate = useNavigate();

    const getToken = () =>{
        const tokenString = localStorage.getItem('token');
        
        const userToken = JSON.parse(tokenString);
        return userToken;
    }

    const getUser = () =>{
      
        const userString = localStorage.getItem('user');
        const user_detail = JSON.parse(userString);
        return user_detail;
    }

    const [token,setToken] = useState(getToken());
    const [user,setUser] = useState(getUser());

    const saveToken = (user,token) =>{
        
        localStorage.setItem('token',JSON.stringify(token));
        localStorage.setItem('user',JSON.stringify(user));

        setToken(token);
        setUser(user);
        navigate('/dashboard');
    }

    const logout = () => {
        localStorage.clear();
        navigate('/login');
    }
    // console.log(token)
    const http = axios.create({
        baseURL:`${process.env.REACT_APP_BASEURL_BACKEND}`,
        headers:{            
            "Content-type" : "application/json",
            'Content-Type': 'multipart/form-data',
            "Authorization" : `Bearer ${token}`
        },
        
    });
    return {
        setToken:saveToken,
        token,
        user,
        getToken,
        http,
        logout
    }
}