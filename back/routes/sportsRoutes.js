import express from 'express';
import axios from 'axios';

const router = express.Router();

router.get('/results', async (req, res) => {
  const apiKey = process.env.API_FOOTBALL_KEY;
  const query = req.query.q || 'Copa America';

  try {
    const response = await axios.get(`https://v3.football.api-sports.io/fixtures`, {
      headers: { 'x-rapidapi-key': apiKey },
      params: {
        league: 10, // ID de la liga para Copa América (puede variar)
        season: 2024 // Cambia al año correspondiente
      }
    });
    res.json(response.data.response); // Asegúrate de verificar la estructura de datos
  } catch (error) {
    console.error('Error al obtener datos de API-FOOTBALL:', error);
    res.status(500).json({ error: 'Error al obtener datos de API-FOOTBALL' });
  }
});

export default router;

