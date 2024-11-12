
import express from 'express';

const router = express.Router();

// Ruta para obtener partidos
router.get('/', async (req, res) => {
  try {
    // Ejemplo de datos de partidos
    const partidos = [
      { id: 1, equipo1: "Argentina", equipo2: "Brasil", fecha: "2024-11-05", hora: "18:00" },
      { id: 2, equipo1: "Colombia", equipo2: "Chile", fecha: "2024-11-06", hora: "20:00" },
      // Agrega más partidos aquí o conéctalo a tu base de datos
    ];

    res.json(partidos);
  } catch (error) {
    console.error("Error al obtener partidos:", error);
    res.status(500).json({ error: "Error al obtener los partidos" });
  }
});

export default router;
