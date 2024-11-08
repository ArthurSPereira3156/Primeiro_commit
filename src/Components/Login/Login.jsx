import React, { useState } from 'react';
import { FaUser, FaLock } from "react-icons/fa";
import "./login.css";

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [rememberMe, setRememberMe] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();

        if (rememberMe) {
            alert("Dados de Login armazenados: " + username);
        }
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
                        onFocus={(e) => e.target.placeholder = ""}
                        onBlur={(e) => e.target.placeholder = "E-mail"}
                        onChange={(e) => setUsername(e.target.value)} 
                    />
                </div>

                <div className="input-field">
                    <FaLock className="icon" />
                    <input 
                        type="password" 
                        placeholder="Password"
                        onFocus={(e) => e.target.placeholder = ""}
                        onBlur={(e) => e.target.placeholder = "Password"}
                        onChange={(e) => setPassword(e.target.value)} 
                    />
                </div>

                <div className="recall-forget">
                    <label>
                        <input 
                            type="checkbox"
                            checked={rememberMe}
                            onChange={(e) => setRememberMe(e.target.checked)} 
                        />
                        Remember me 
                    </label>       
                    <a href="#">Forgot your password?</a>   
                </div>            
                
                <button type="submit">Run</button>
               
                <div className="signup-link">
                    <p>
                        Don't have an account? <a href="#">Register new account</a>
                    </p>
                </div>
            </form>     
        </div>
    );
}

export default Login;
