import React from 'react'
import {FaUser, FaLock} from "react-icons/fa";
import { useState } from 'react';
import "./login.css";

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();

        alert("Dados de Login armazenados" + username );
    };

  return (
    <div className="container">
        <form onSubmit={handleSubmit}>
            <h1>Are you ready?</h1>
            <div className="input-field">
                <FaUser className="icon" />
                <input 
                    type="email" 
                    placeholder="E-mail" 
                    onChange={(e) => setUsername (e.target.value)} 
                />
                
            </div>

            <div className="input-field">
                <FaLock className="icon" />
                <input 
                    type="password" 
                    placeholder="Password"
                    onChange={(e) => setPassword (e.target.value)} 
                />

            </div>

            <div className="recall-forget">
                <label>
                    <input type="checkbox"/>
                    Remember me 
                </label>       
                   <a href="#">Forgot your password?</a>   
            </div>            
            
            <button>Run</button>
           
            <div className="signup-link">
                <p>
                Don't have an account? <a href="#">Register new account</a>
                </p>
            </div>
        </form>     
    </div>
  )
}

export default Login
