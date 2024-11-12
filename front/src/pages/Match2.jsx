import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { jugadoresUruguay } from '../jugadoresUruguay';
import { jugadoresBrasil } from '../jugadoresBrasil';
import '../componentes/estilos/Match2.css';

// Ajustamos las posiciones para que coincidan con las del JSON
const titularesUruguay = [
  { "POS": 1, "Nombre": "Fernando Muslera" },
  { "POS": 4, "Nombre": "José María Giménez" }, // POS ajustada para coincidir
  { "POS": 3, "Nombre": "Diego Godín" },
  { "POS": 17, "Nombre": "Matías Viña" }, // POS ajustada para coincidir
  { "POS": 2, "Nombre": "Ronald Araújo" },
  { "POS": 6, "Nombre": "Rodrigo Bentancur" },
  { "POS": 15, "Nombre": "Federico Valverde" }, // POS ajustada para coincidir
  { "POS": 7, "Nombre": "Nicolás De La Cruz" },
  { "POS": 9, "Nombre": "Luis Suárez" },
  { "POS": 10, "Nombre": "Edinson Cavani" },
  { "POS": 19, "Nombre": "Jonathan Rodríguez" } // POS ajustada para coincidir
];

const titularesBrasil = [
  { "POS": 1, "Nombre": "Alisson Becker" },
  { "POS": 2, "Nombre": "Danilo" },
  { "POS": 3, "Nombre": "Thiago Silva" },
  { "POS": 4, "Nombre": "Marquinhos" },
  { "POS": 7, "Nombre": "Lucas Paquetá" },
  { "POS": 8, "Nombre": "Fred" },
  { "POS": 9, "Nombre": "Gabriel Jesus" },
  { "POS": 10, "Nombre": "Neymar" },
  { "POS": 11, "Nombre": "Vinícius Júnior" },
  { "POS": 12, "Nombre": "Éder Militão" }, // POS ajustada para coincidir
  { "POS": 17, "Nombre": "Renan Lodi" }
];

const Match2 = () => {
  const { matchId } = useParams();
  const [selectedPlayer, setSelectedPlayer] = useState(null);
  const navigate = useNavigate();
  const [match, setMatch] = useState(null);

  useEffect(() => {
    // Simulación de la carga de datos de un archivo JSON
    const matches = [
      {
        id: '2',
        team1: 'Uruguay',
        team2: 'Brasil',
        team1Players: jugadoresUruguay,
        team2Players: jugadoresBrasil,
      },
      // Puedes agregar más partidos aquí
    ];

    const foundMatch = matches.find(m => m.id === matchId);
    setMatch(foundMatch);
  }, [matchId]);

  if (!match) {
    return <div>Partido no encontrado</div>;
  }

  const team1Players = (match.team1Players || []).filter(player =>
    titularesUruguay.some(titular => titular.POS === player.POS)
  );
  const team2Players = (match.team2Players || []).filter(player =>
    titularesBrasil.some(titular => titular.POS === player.POS)
  );

  const handlePlayerClick = (player) => {
    setSelectedPlayer(player);
  };

  return (
    <div>
      <h2>Formación del Partido: {match.team1} vs {match.team2}</h2>
      <div className="field field-uru-bra">
        <img src="../../../assets/uru_brasil_match.png" alt="URU Brasil" />
        {team1Players.map(player => (
          <div className="player" style={getPlayerStyle(player.POS, 'Uruguay')} key={player.POS}
            onClick={() => handlePlayerClick(player)}
          >
            <div className="player-number">{player.POS}</div>
            <div className="tooltip">{player.Nombre}</div>
          </div>    
        ))}

        {team2Players.map(player => (
          <div className="player" style={getPlayerStyle(player.POS, 'Brasil')} key={player.POS}
            onClick={() => handlePlayerClick(player)}
          >
            <div className="player-number">{player.POS}</div>
            <div className="tooltip">{player.Nombre}</div>
          </div>
        ))}
      </div>
      
      {selectedPlayer && (
        <div className="player-details">
          <h3>Ficha del Jugador</h3>
          <p>Nombre: {selectedPlayer.Nombre}</p>
          <p>Posición: {selectedPlayer.POS}</p>
          <p>Partidos: {selectedPlayer.Partidos}</p>
          <p>Goles: {selectedPlayer.Goles}</p>
          <p>Asistencias: {selectedPlayer.Asistencias}</p>
          <p>Tarjetas Amarillas: {selectedPlayer["Tarjetas Amarillas"]}</p>
          <p>Tarjetas Rojas: {selectedPlayer["Tarjetas Rojas"]}</p>
          <p>Edad: {selectedPlayer.Edad}</p>
          <p>Estatura: {selectedPlayer.Estatura}</p>
          <p>Peso: {selectedPlayer.Peso}</p>
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
  const positionsUruguay = {

    1: { top: '38%', left: '2.5%' }, 
    2: { top: '63%', left: '5%' },  
    3: { top: '50%', left: '5.5%' }, 
    4: { top: '28%', left: '6.5%' }, 
    5: { top: '17%', left: '6.5%' },  
    6: { top: '62%', left: '13.5%' },  
    7: { top: '49%', left: '13%' }, 
    8: { top: '37%', left: '12%' }, 
    9: { top: '20%', left: '14%' }, 
    10: { top: '47%', left: '20%' }, 
    11: { top: '30%', left: '20%' } 
  };

  const positionsBrasil = {
    1: { top: '38%', right: '2.5%' }, 
    2: { top: '63%', right: '5%' },  
    3: { top: '50%', right: '5.5%' }, 
    4: { top: '28%', right: '6.5%' }, 
    5: { top: '17%', right: '6.5%' },  
    6: { top: '62%', right: '13.5%' },  
    7: { top: '49%', right: '13%' }, 
    8: { top: '37%', right: '12%' }, 
    9: { top: '20%', right: '14%' }, 
    10: { top: '47%', right: '20%' }, 
    11: { top: '30%', right: '20%' } 
  };

  return team === 'Uruguay' ? positionsUruguay[pos] : positionsBrasil[pos];
};

export default Match2;
