import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv'; 
import usersRoutes from '../routes/registerRoute.js';
import loginRoutes from '../routes/loginRoutes.js';
import sportsRoutes from '../routes/sportsRoutes.js';
import newsRoutes from '../routes/newsRoutes.js';
import matchesRoutes from '../routes/matchesRoutes.js';

dotenv.config(); // Carga las variables de entorno

// Verificación de que la clave de JWT y la clave de SerpApi se hayan cargado
if (!process.env.JWT_SECRET) {
  console.error('JWT Secret no está definido. Verifica el archivo .env');
}
if (!process.env.API_FOOTBALL_KEY) {
  console.error('Clave de api football no está definida. Verifica el archivo .env');
}

const app = express();
const port = process.env.PORT || 3001;

// Configuración de CORS
app.use(cors({
  origin: 'http://localhost:3000',
  methods: 'GET,POST,PUT,DELETE',
  allowedHeaders: 'Content-Type,Authorization'
}));

// Middleware para parsear JSON
app.use(express.json());

// Rutas de la API
app.use('/api/users', usersRoutes);
app.use('/api/login', loginRoutes);
app.use('/api/sports', sportsRoutes); // Endpoint para resultados deportivos
app.use('/api/news', newsRoutes);
app.use('/api/matches', matchesRoutes);

// Datos de ejemplo
const playersData = [
  { name: 'Player 1', position: 'Forward' },
  { name: 'Player 2', position: 'Midfielder' }
];
app.get('/api/players', (req, res) => {
  res.json(playersData);
});

const teamsData = [
  { id: 1, name: 'Team 1', country: 'Country 1' },
  { id: 2, name: 'Team 2', country: 'Country 2' }
];
app.get('/api/teams', (req, res) => {
  res.json(teamsData);
});

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor escuchando en el puerto ${port}`);
});
