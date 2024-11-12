import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import data from '../data.json';
import { jugadores as jugadoresArgentina } from '../jugadores';
import { jugadores as jugadoresColombia } from '../jugadoresColombia';
import '../componentes/estilos/Match.css';


// Define starting lineup for both teams
const titularesArgentina = [
  { "POS": 23, "Nombre": "Emiliano Martínez" },
  { "POS": 4, "Nombre": "Gonzalo Montiel" },
  { "POS": 13, "Nombre": "Cristian Romero" },
  { "POS": 25, "Nombre": "Lisandro Martínez" },
  { "POS": 3, "Nombre": "Nicolás Tagliafico" },
  { "POS": 7, "Nombre": "Rodrigo De Paul" },
  { "POS": 24, "Nombre": "Enzo Fernández" },
  { "POS": 20, "Nombre": "Alexis Mac Allister" },
  { "POS": 11, "Nombre": "Ángel Di María" },
  { "POS": 10, "Nombre": "Lionel Messi (C)" },
  { "POS": 9, "Nombre": "Julián Álvarez" }
];

const titularesColombia = [
  { "POS": 12, "Nombre": "Camilo Vargas" },
  { "POS": 4, "Nombre": "Santiago Arias" },
  { "POS": 23, "Nombre": "Dávinson Sánchez" },
  { "POS": 2, "Nombre": "Carlos Cuesta" },
  { "POS": 17, "Nombre": "Johan Mojica" },
  { "POS": 6, "Nombre": "Richard Rios" },
  { "POS": 16, "Nombre": "Jefferson Lerma" },
  { "POS": 11, "Nombre": "Jhon Arias" },
  { "POS": 10, "Nombre": "James Rodríguez" },
  { "POS": 24, "Nombre": "Jhon Córdoba" },
  { "POS": 7, "Nombre": "Luis Díaz" }
];

const Match = () => {
  const { matchId } = useParams();
  const [selectedPlayer, setSelectedPlayer] = useState(null); // Estado para el jugador seleccionado
  const navigate = useNavigate();
  const match = data.upcomingMatches.find(m => m.id === parseInt(matchId));

  if (!match) {
    return <div>Partido no encontrado</div>;
  }

  // Log the imported data to verify
  console.log("jugadoresArgentina:", jugadoresArgentina);
  console.log("jugadoresColombia:", jugadoresColombia);

  // Ensure we handle undefined data gracefully
  const team1Players = (jugadoresArgentina || []).filter(player =>
    titularesArgentina.some(titular => titular.POS === player.POS)
  );
  const team2Players = (jugadoresColombia || []).filter(player =>
    titularesColombia.some(titular => titular.POS === player.POS)
  );

  // Salida de depuración
  console.log("Jugadores Filtrados de Colombia:", team2Players);

  const handlePlayerClick = (player) => {
    setSelectedPlayer(player); // Actualiza el jugador seleccionado
  };

  return (
    <div>
      <h2>Formación del Partido: {match.team1} vs {match.team2}</h2>
      <div className="field field-arg-col">
        {team1Players.map(player => (
          <div className="player" style={getPlayerStyle(player.POS, 'Argentina')} key={player.POS}
            onClick={() => handlePlayerClick(player)}
          >
            <div className="player-number">{player.POS}</div>
            <div className="tooltip">{player.Nombre}</div>
          </div>
        ))}

        {/* Colombia's Players */}
        {team2Players.map(player => (
          <div className="player" style={getPlayerStyle(player.POS, 'Colombia')} key={player.POS}
            onClick={() => handlePlayerClick(player)}
          >
            <div className="player-number">{player.POS}</div>
            <div className="tooltip">{player.Nombre}</div>
          </div>
        ))}
      </div>
      
      {/* Ficha del jugador seleccionado */}
      {selectedPlayer && (
        <div className="player-details">
          <h3>Ficha del Jugador</h3>
          <p>Nombre: {selectedPlayer.Nombre}</p>
          <p>Posición: {selectedPlayer.POS}</p>
          <p>Partidos: {selectedPlayer.Partidos}</p>  
          <p>Goles: {selectedPlayer.Goles}</p>
          <p>Asistencias: {selectedPlayer.Asistencias}</p>
          <p>Edad: {selectedPlayer.Edad}</p>
          <p>Nacionalidad: {selectedPlayer.Nacionalidad}</p>
          <button onClick={() => setSelectedPlayer(null)}>Cerrar</button>
        </div>
      )}
      {/* Botón de Volver */} 
      <div className="button-container"> 
        <button onClick={() => navigate(-1)}>Volver</button> 
        </div>
    </div>
  );
};

// Function to set player positions on the field
const getPlayerStyle = (pos, team) => {
  const positionsArgentina = {
    23: { top: '38%', left: '2.5%' }, // Emiliano Martínez
    4: { top: '63%', left: '5%' }, // Gonzalo Montiel
    13: { top: '50%', left: '5.5%' }, // Cristian Romero
    25: { top: '28%', left: '6.5%' }, // Lisandro Martínez
    3: { top: '17%', left: '6.5%' }, // Nicolás Tagliafico
    7: { top: '62%', left: '13.5%' }, // Rodrigo De Paul
    24: { top: '49%', left: '13%' }, // Enzo Fernández
    20: { top: '37%', left: '12%' }, // Alexis Mac Allister
    11: { top: '20%', left: '14%' }, // Ángel Di María
    10: { top: '47%', left: '20%' }, // Lionel Messi
    9: { top: '30%', left: '20%' } // Julián Álvarez
  };

  const positionsColombia = {
    12: { top: '38%', right: '50%' }, // Camilo Vargas
    4: { top: '16%', right: '55%' }, // Santiago Arias
    23: { top: '30%', right: '55.5%' }, // Dávinson Sánchez
    2: { top: '44%', right: '55%' }, // Carlos Cuesta
    17: { top: '59%', right: '54%' }, // Johan Mojica
    6: { top: '18%', right: '61.5%' }, // Richard Rios
    16: { top: '39%', right: '61%' }, // Jefferson Lerma
    11: { top: '58%', right: '61%' }, // Jhon Arias
    10: { top: '18%', right: '68%' }, // James Rodríguez
    24: { top: '36%', right: '68%' }, // Jhon Córdoba
    7: { top: '56%', right: '68%' } // Luis Díaz
  };

  return team === 'Argentina' ? positionsArgentina[pos] : positionsColombia[pos];
};

export default Match;
