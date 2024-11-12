import React from 'react';
import { useNavigate } from 'react-router-dom'; // Importa useNavigate
import posiciones from '../posiciones';
import '../componentes/estilos/styles.css';

const Positions = () => {
  const navigate = useNavigate(); // Declara el hook useNavigate

  // Asegúrate de que `posiciones` esté definido y tenga datos
  if (!posiciones || !posiciones.grupos) {
    return <div>No hay datos de posiciones disponibles.</div>;
  }

  return (
    <div>
      <h2>Tabla de Posiciones</h2>
      {posiciones.grupos.map(grupo => (
        <div key={grupo.nombre}>
          <h3>{grupo.nombre}</h3>
          <table>
            <thead>
              <tr>
                <th>Nº</th>
                <th>Equipo</th>
                <th>Puntos</th>
                <th>PJ</th>
                <th>PG</th>
                <th>PE</th>
                <th>PP</th>
                <th>GF</th>
                <th>GC</th>
                <th>DF</th>
              </tr>
            </thead>
            <tbody>
              {grupo.equipos.map((equipo) => (
                <tr key={equipo.posicion}>
                  <td>{equipo.posicion}</td>
                  <td>{equipo.nombre}</td>
                  <td>{equipo.estadisticas.puntos}</td>
                  <td>{equipo.estadisticas.partidos_jugados}</td>
                  <td>{equipo.estadisticas.ganados}</td>
                  <td>{equipo.estadisticas.empatados}</td>
                  <td>{equipo.estadisticas.perdidos}</td>
                  <td>{equipo.estadisticas.goles_favor}</td>
                  <td>{equipo.estadisticas.goles_contra}</td>
                  <td>{equipo.estadisticas.diferencia_goles}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ))}

      {/* Botón de Volver */}
      <div className="button-container">
        <button onClick={() => navigate(-1)}>Volver</button>
      </div>
    </div>
  );
};

export default Positions;
