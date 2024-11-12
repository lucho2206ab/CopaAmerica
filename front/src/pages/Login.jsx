import React, { useState } from 'react';
import { Button, TextField, Typography, CircularProgress } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    // Validación de campos
    if (!username.trim() || !password.trim()) {
      setErrorMessage('Por favor, ingrese nombre de usuario y contraseña.');
      return;
    }

    setIsLoading(true);
    fetch('http://localhost:3001/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ username: username.trim(), password: password.trim() })
    })
    .then(response => {
      setIsLoading(false);
      if (response.ok) {
        return response.json();
      } else if (response.status === 401) {
        throw new Error('Credenciales incorrectas');
      } else {
        throw new Error('Error del servidor');
      }
    })
    .then(data => {
      localStorage.setItem('token', data.token);
      localStorage.setItem('username', username.trim());
      console.log('Login exitoso: ', { token: data.token, username: username.trim() }); // Agregar logs para verificación
      navigate('/home');
    })
    .catch(error => {
      console.error(error);
      setErrorMessage(error.message);
    });
  };

  return (
    <div>
      <Typography variant="h4" gutterBottom>
        Iniciar sesión
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Nombre de usuario"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Contraseña"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          fullWidth
          margin="normal"
        />
        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '20px' }}>
          <Button type="submit" variant="contained" color="primary" style={{ width: '48%' }} disabled={isLoading}>
            {isLoading ? <CircularProgress size={24} /> : 'Iniciar sesión'}
          </Button>
          <Button variant="contained" color="secondary" style={{ width: '48%' }} onClick={() => navigate('/register')}>
            Registrarse
          </Button>
        </div>
      </form>
      {errorMessage && <Typography color="error" style={{ marginTop: '10px' }}>{errorMessage}</Typography>}
    </div>
  );
};

export default Login;
