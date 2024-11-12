import React from 'react';
import { useNavigate } from 'react-router-dom';
import Grid from '@mui/material/Grid'; // Importa el componente Grid de Material-UI
import estadios from '../estadios.js'; // Asegúrate de que la ruta al JSON sea correcta
import '../componentes/estilos/estadios.css';

const Estadios = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h2>Estadios</h2>
      <Grid container spacing={2}>
        {estadios.map((estadio, index) => (
          <Grid item xs={12} sm={6} key={index}>
            <div className="estadio">
              <h3>{estadio.nombre}</h3>
              <p>Ubicación: {estadio.ubicacion}</p>
              <p>Capacidad: {estadio.capacidad}</p>
            </div>
          </Grid>
        ))}
      </Grid>
      <div className="button-container">
        <button onClick={() => navigate(-1)}>Volver</button>
      </div>
    </div>
  );
};

export default Estadios;
