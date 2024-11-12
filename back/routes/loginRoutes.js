import express from 'express';
import { authenticateUser, generateToken } from '../data_base/models/auth.js';


const router = express.Router();

router.post('/', async (req, res) => {
  const { username, password } = req.body;
  
  // Verificar si el username y password están llegando correctamente
  console.log('Datos recibidos en el login:', { username, password });
  
  try {
    const user = await authenticateUser(username, password);

    if (user) {
      const token = generateToken(user);
      res.json({ token });
    } else {
      res.status(401).json({ error: 'Credenciales incorrectas' });
    }
  } catch (error) {
    console.error('Error en la autenticacion', error);
    res.status(500).json({ error: 'Error en el servidor'})
  }
});


export default router;
