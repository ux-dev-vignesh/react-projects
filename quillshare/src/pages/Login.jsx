// src/pages/Login.jsx
import React, { useState } from 'react';
import { loginUser } from '../services/auth';  // Import login function
import { useNavigate } from 'react-router-dom';  // Import useNavigate for routing

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate(); // For programmatic navigation

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            await loginUser(email, password);  // Call the login function
            navigate('/');  // Navigate to the Home page after successful login
        } catch (error) {
            console.error('Login failed: ', error);
        }
    };

    return (
        <div>
            <h2>Login</h2>
            <form onSubmit={handleLogin}>
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <button type="submit">Login</button>
            </form>
        </div>
    );
};

export default LoginPage;
