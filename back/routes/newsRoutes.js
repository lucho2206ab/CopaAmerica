import express from 'express';

const router = express.Router();

// Ruta para obtener noticias
router.get('/', async (req, res) => {
  try {
    // Ejemplo de datos de noticias
    const noticias = [
      { id: 1, titulo: "Partido emocionante", contenido: "La final fue increíble..." },
      { id: 2, titulo: "Jugador destacado", contenido: "El delantero marcó tres goles..." },
      // Agrega más noticias aquí o conéctalo a tu base de datos
    ];

    res.json(noticias);
  } catch (error) {
    console.error("Error al obtener noticias:", error);
    res.status(500).json({ error: "Error al obtener las noticias" });
  }
});

export default router;
