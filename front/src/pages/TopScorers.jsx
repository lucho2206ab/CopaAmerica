import React from 'react';
import { useNavigate } from 'react-router-dom';
import goleadores from '../goleadores';


const TopScorers = () => {
  const navigate = useNavigate();
  // Asegúrate de que `goleadores` esté definido y tenga datos
  if (!goleadores || !goleadores.goleadores) {
    return <div>No hay datos de goleadores disponibles.</div>;
  }

  return (
    <div>
      <h2>Goleadores</h2>
      <table>
        <thead>
          <tr>
            <th>Jugador</th>
            <th>Equipo</th>
            <th>Goles</th>
          </tr>
        </thead>
        <tbody>
          {goleadores.goleadores.map((jugador, index) => (
            <tr key={index}>
              <td>{jugador.nombre}</td>
              <td>{jugador.equipo}</td>
              <td>{jugador.estadísticas.goles_totales}</td>
            </tr>
          ))}
        </tbody>
      </table>

            {/* Botón de Volver */}
            <div className="button-container">
        <button onClick={() => navigate(-1)}>Volver</button>
      </div>
    </div>

    
  );
};

export default TopScorers;
