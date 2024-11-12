import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardContent, Typography } from '@mui/material';

const MatchCard = ({ match }) => {
  return (
    <Card>
      <CardContent>
        <Typography variant="h5" component="div">
          {match.team1} vs {match.team2}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Fecha: {match.date}
        </Typography>
      </CardContent>
    </Card>
  );
};

MatchCard.propTypes = {
  match: PropTypes.shape({
    team1: PropTypes.string.isRequired,
    team2: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
  }).isRequired,
};

export default MatchCard;
