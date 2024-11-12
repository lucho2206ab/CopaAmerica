import React from 'react';
import './estilos/CuadroClasificacion.css'; // Archivo de estilos
import data from '../data.json'; // Importar el JSON con los datos hardcodeados

const CuadroClasificacion = () => {
  const matches = data.matches; // Usar datos del JSON

  return (
    <div className="cuadro-clasificacion">
      <h2>Clasificación</h2>
      <div className="rondas">
        <div className="cuartos">
          <h3>Cuartos de Final</h3>
          {matches.quartos.map((match, index) => (
            <div key={index} className="match">
              <div>{match.team1} ({match.score1})</div>
              <div>{match.team2} ({match.score2})</div>
            </div>
          ))}
        </div>
        <div className="semifinales">
          <h3>Semifinales</h3>
          {matches.semifinales.map((match, index) => (
            <div key={index} className="match">
              <div>{match.team1} ({match.score1})</div>
              <div>{match.team2} ({match.score2})</div>
            </div>
          ))}
        </div>
        <div className="final">
          <h3>Final</h3>
          <div className="match">
            <div>{matches.final.team1} ({matches.final.score1})</div>
            <div>{matches.final.team2} ({matches.final.score2})</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CuadroClasificacion;
