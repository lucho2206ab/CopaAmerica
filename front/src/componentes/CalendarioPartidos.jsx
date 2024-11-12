import React from 'react';
import './estilos/CalendarioPartidos.css'; // Archivo de estilos
import data from '../data.json'; // Importar el JSON con los datos hardcodeados

const CalendarioPartidos = () => {
  const schedule = data.upcomingMatches; // Usar datos del JSON

  return (
    <div className="calendario-partidos">
      <h2>Calendario de Partidos</h2>
      {schedule.map((match, index) => (
        <div key={index} className="match">
          <div className="match-info">
            <span>{match.team1} vs {match.team2}</span>
            <span>{match.date}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CalendarioPartidos;
