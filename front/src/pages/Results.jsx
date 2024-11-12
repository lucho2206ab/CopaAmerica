// Results.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import resultados from '../resultados';
import '../componentes/estilos/styles.css';

const Results = () => {
  const navigate = useNavigate ();
  return (
    <div>
      <h2>Resultados de los Partidos</h2>
      {resultados.map((resultado, index) => (
        <div key={index}>
          <h3>{resultado.fecha}</h3>
          <p>
            {resultado.equipo1} {resultado.golesEquipo1} - {resultado.golesEquipo2} {resultado.equipo2}
          </p>
        </div>
      ))}
      {/* Botón de Volver */}
      <div className="button-container">
        <button onClick={() => navigate(-1)}>Volver</button>
      </div>

    </div>
  );
};

export default Results;
