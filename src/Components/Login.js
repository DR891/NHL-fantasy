import React,{useState} from 'react'
import {createRef} from 'react'
import axios from 'axios';
import {useNavigate} from "react-router-dom"
const usernameLogin = createRef()
const passwordLogin = createRef()
const Login =()=>{
    const [userLogIn, setUserLogIn] = useState([])
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const navigate = useNavigate()

    const fetchUser=()=>{
        fetch('http://localhost:3000/user/findall')
        .then(data=>data.json())
        .then(data=>setUserLogIn([data]))
    }
    const checkUser =()=>{
        for(let i=0;i<userLogIn.length; i++){
        if(userLogIn.username === userLogIn && passwordLogin.password === passwordLogin){
            setIsLoggedIn(true)
        }}
    }
    const navigation =()=>{
        if(isLoggedIn != false){
            navigate('/user/Login/Homepage')
        }
    }

    return(
        <div>
            <input type="text" ref={usernameLogin}></input>
            <input type="text" ref={passwordLogin}></input>
            <button onClick={()=>{
                fetchUser();
                checkUser();
                navigation()
            }}>Click me bitch</button>
        </div>
    )
}


export default Login;

