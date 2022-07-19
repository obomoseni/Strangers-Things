import React, { useState } from "react";
import { registerUser } from "../api";

const Register = ({setToken}) => {
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    console.log(userName);

    const handleSubmit = async (event) => {
        event.preventDefault();
        const user = {
                username: userName,
                password 
        }
        const data = await registerUser(user);
        console.log('This is my registered data', data);
        localStorage.setItem('token', data.token);
        setToken(data.token);
    }

    return(
        <div id="register">
            <h1>Register</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    Username:
                    <input className="text-box" type="text" name="username" onChange={(event) => {
                        setUserName(event.target.value);
                    }}/><br></br>
                </label>
                <label>
                    Password:
                    <input className="text-box" type="text" name="password" onChange={(event) => {
                        setPassword(event.target.value);
                    }}/><br></br>
                     
                </label>
                <label>
                    Confirm Password:
                    <input className="text-box" type="text" name="confirmPassword" onChange={(event) => {
                        setConfirmPassword(event.target.value);
                    }}/><br></br>
                </label>
                <button className="button" type="submit">Register</button>
            </form>
        </div>
    );
};



export default Register