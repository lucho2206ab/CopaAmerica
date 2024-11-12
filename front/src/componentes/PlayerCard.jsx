import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

const PlayerCard = ({ player, onClick }) => {
  return (
    <Card onClick={() => onClick(player)} style={{ cursor: 'pointer' }}>
      <CardContent>
        <Typography variant="h6">{player.Nombre}</Typography>
        <Typography variant="body2">Posición: {player.POS}</Typography>
      </CardContent>
    </Card>
  );
};

export default PlayerCard;
