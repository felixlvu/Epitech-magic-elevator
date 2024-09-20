import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { TextField, Button } from '@mui/material';
import InputBase from '@mui/material/InputBase';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import './loginPage.css';

const LoginPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch('http://localhost:4242/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, password }),
        });

        const data = await response.json();
        if (data.token) {
            console.log(data.token);
            localStorage.setItem('token', data.token);
            navigate('/dashboard');
        } else {
            alert('Erreur d\'authentification');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <main className='login-background'>
                <div className='login-title-container'>
                  <div className='login-title-text-container'>
                    <h1 className='login-title-text-n1'>Automatic</h1>
                    <h1 className='login-title-text-n2'>Epitech</h1>
                    <h1 className='login-title-text-n3'>Elevator</h1>
                  </div>
                  <div className='login-title-contributor-container'>
                    <button className='login-title-contributor-button'>
                      <FontAwesomeIcon icon={faHeart} size="xl" style={{color: "#ffffff",}} />
                    </button>
                  </div>
                </div>
                <div className='login-input-container'>
                  <div className='login-input-username-button'>
                    <InputBase
                      className="login-input-username-input"
                      sx={{ ml: 1, flex: 1 }}
                      id="input-username"
                      placeholder="Username"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                    />
                  </div>
                  <div className='login-input-password-button'>
                    <InputBase
                      className="login-input-password-input"
                      sx={{ ml: 1, flex: 1 }}
                      id="input-password"
                      placeholder="Password"
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                </div>
                <div className='login-button-container'>
                  <button className='login-button-connexion'>
                    <h1 className='login-button-connexion-text'>Connexion</h1>
                  </button>
                  <h1 className='login-button-info-text'>Contactez un modérateur pour obtenir un compte.</h1>
                </div>
            </main>
        </form>
    );
};

export default LoginPage;