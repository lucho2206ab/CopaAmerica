import React from 'react';
import { Grid, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import data from '../data.json';
import NewsCard from '../componentes/NewsCard';
import MatchCard from '../componentes/MatchCard';
import 'flag-icons/css/flag-icons.min.css';
import '../componentes/estilos/styles.css';

const Home = () => {
  const { news = [], upcomingMatches = [] } = data; // Asegura que news y upcomingMatches son arrays vacíos si están indefinidos

  return (
    <Grid container spacing={2}>
      {/* Noticias destacadas */}
      <Grid item xs={12}>
        <Typography variant="h5" gutterBottom>Noticias destacadas</Typography>
        <Grid container spacing={2}>
          {news.map(article => (
            <Grid item xs={12} sm={6} md={4} key={article.id}>
              <a href={article.link} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                <NewsCard article={article} />
              </a>
            </Grid>
          ))}
        </Grid>
      </Grid>

      {/* Partidos de la Copa América */}
      <Grid item xs={12}>
        <Typography variant="h5" gutterBottom>Partidos de la Copa América</Typography>
        <Grid container spacing={2}>
          {upcomingMatches.map(match => (
            <Grid item xs={12} sm={6} md={4} key={match.id}>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <span className={`fi fi-${match.team1FlagCode}`} style={{ fontSize: '2em', marginRight: '10px', marginLeft: '10px' }}></span>
                <Link to={match.id === '2' ? `/match2/${match.id}` : `/match/${match.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                  <MatchCard match={match} />
                </Link>
                <span className={`fi fi-${match.team2FlagCode}`} style={{ fontSize: '2em', marginRight: '10px', marginLeft: '10px' }}></span>
              </div>
            </Grid>
          ))}
        </Grid>
      </Grid>

      {/* Estadísticas */}
      <Grid item xs={12}>
        <Typography variant="h5" gutterBottom>Estadísticas</Typography>
        <Grid container spacing={2}>
          {/* Posiciones */}
          <Grid item xs={12} sm={6} md={4}>
            <Link to="/positions" style={{ textDecoration: 'none', color: 'inherit' }}>
              <Typography variant="h6" className="stats-title">Posiciones</Typography>
            </Link>
          </Grid>

          {/* Goleadores */}
          <Grid item xs={12} sm={6} md={4}>
            <Link to="/topscorers" style={{ textDecoration: 'none', color: 'inherit' }}>
              <Typography variant="h6" className="stats-title">Goleadores</Typography>
            </Link>
          </Grid>

          {/* Resultados */}
          <Grid item xs={12} sm={6} md={4}>
            <Link to="/results" style={{ textDecoration: 'none', color: 'inherit' }}>
              <Typography variant="h6" className="stats-title">Resultados</Typography>
            </Link>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Home;
