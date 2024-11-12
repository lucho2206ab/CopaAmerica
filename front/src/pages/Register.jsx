import React, { useState } from 'react';
import RegisterForm from '../componentes/RegisterForm';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Register() {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleFormSubmit = async (formData) => {
    console.log("Datos del formulario:", formData); // Para depuración
    try {
      // Hacer la petición al backend con los datos del formulario
      const response = await axios.post('http://localhost:3001/api/users', formData);
      
      if (response.status === 201) { // Verifica si la respuesta indica éxito (código 201)
        setSuccess(true);
        setError('');
        
        // Redirigir al login después de 2 segundos
        setTimeout(() => {
          navigate('/login');
        }, 2000); // Ajusta el tiempo si deseas un retraso diferente
      }
    } catch (err) {
      // Manejo del error (puede ser por error de validación o error de conexión)
      setError('Hubo un error en el registro, por favor intente de nuevo.');
      setSuccess(false);
    }
  };

  return (
    <div>
      <h1>Registro</h1>
      <RegisterForm onSubmit={handleFormSubmit} />
      {success && <p>¡Registro exitoso! Redirigiendo al inicio de sesión...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
}

export default Register;
