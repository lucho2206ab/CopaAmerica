import React, { useState } from 'react';
import { Grid, Typography, Modal, Box } from '@mui/material';
import { jugadores as jugadoresArgentina } from '../jugadores'; // Importa los datos de jugadores de Argentina
import PlayerCard from '../componentes/PlayerCard';
import { useNavigate } from 'react-router-dom';

const Players = () => {
  const [selectedPlayer, setSelectedPlayer] = useState(null);
  const navigate = useNavigate();

  const handlePlayerClick = (player) => {
    setSelectedPlayer(player);
  };

  const handleCloseModal = () => {
    setSelectedPlayer(null);
  };

  return (
    <Grid container spacing={1}>
      <Typography variant="h6" gutterBottom style={{ padding: '0 15px', overflow: 'hidden', whiteSpace: 'nowrap' }}>
        Jugadores
      </Typography>
      <Grid container spacing={2}>
        {jugadoresArgentina.map(player => (
          <Grid item xs={12} sm={6} md={4} key={player.POS}>
            <PlayerCard player={player} onClick={() => handlePlayerClick(player)} />
          </Grid>
        ))}

        {/* Botón de Volver */}
        <Grid item xs={12} style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
          <button onClick={() => navigate(-1)} style={{ padding: '10px 20px', fontSize: '16px', width: 'auto' }}>Volver</button>
        </Grid>
      </Grid>

      <Modal open={!!selectedPlayer} onClose={handleCloseModal}>
        <Box sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', bgcolor: 'background.paper', p: 4, borderRadius: 2 }}>
          {selectedPlayer && (
            <>
              <Typography variant="h5">{selectedPlayer.Nombre}</Typography>
              <Typography>Posición: {selectedPlayer.POS}</Typography>
              <Typography>Partidos: {selectedPlayer.Partidos}</Typography>
              <Typography>Goles: {selectedPlayer.Goles}</Typography>
              <Typography>Asistencias: {selectedPlayer.Asistencias}</Typography>
              <Typography>Tarjetas Amarillas: {selectedPlayer['Tarjetas Amarillas']}</Typography>
              <Typography>Tarjetas Rojas: {selectedPlayer['Tarjetas Rojas']}</Typography>
              <Typography>Edad: {selectedPlayer.Edad}</Typography>
              <Typography>Estatura: {selectedPlayer.Estatura}</Typography>
              <Typography>Peso: {selectedPlayer.Peso}</Typography>
              {/* Agrega más detalles según tu archivo JSON */}
            </>
          )}
        </Box>
      </Modal>
    </Grid>
  );
};

export default Players;
