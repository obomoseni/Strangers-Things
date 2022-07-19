import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { logInUser } from "../api";


const Login = ({setToken}) => {
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();


    const handleSubmit = async (event) => {
        event.preventDefault();
        const user = {
            username: userName,
            password
        }
        const data = await logInUser(user);
        console.log('This is my registered data', data);
        localStorage.setItem('token', data.token);
        setToken(data.token);
        navigate("/home");
    }
    return (
        <div id="login">
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    Username:
                    <input className="text-box" type="text" name="username" onChange={(event) => {
                        setUserName(event.target.value);
                    }} />
                </label>
                <label>
                    Password:
                    <input className="text-box" type="text" name="password" onChange={(event) => {
                        setPassword(event.target.value);
                    }} />
                </label>
                <button className="button" type="submit">Login</button>
            </form>
        </div>
    );
};


export default Login;