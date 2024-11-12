import React, { useState } from 'react';
import './estilos/RegisterForm.css';  

function RegisterForm({ onSubmit }) {
  const [formData, setFormData] = useState({
    username: '', 
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Datos del formulario:', formData);
  
    if (formData.password !== formData.confirmPassword) {
      alert("Las contraseñas no coinciden"); // O muestra un mensaje de error en el formulario
      return; // No envía los datos al backend
    }
  
    if (onSubmit) {
      onSubmit({
        username: formData.username,
        email: formData.email,
        password: formData.password
      });
    }
  };
  
  return (
    <form onSubmit={handleSubmit}>
      <label>
        Nombre de usuario: {/* Cambia la etiqueta a Nombre de usuario */}
        <input type="text" name="username" value={formData.username} onChange={handleChange} />
      </label>
      <label>
        Correo electrónico:
        <input type="email" name="email" value={formData.email} onChange={handleChange} />
      </label>
      <label>
        Contraseña:
        <input type="password" name="password" value={formData.password} onChange={handleChange} />
      </label>
      <label>
        Confirmar contraseña:
        <input type="password" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} />
      </label>
      <button type="submit">Registrarse</button>
    </form>
  );
}

export default RegisterForm;
