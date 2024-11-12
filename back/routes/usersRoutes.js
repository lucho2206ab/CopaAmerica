import express from 'express';
import bcrypt from 'bcrypt';
import { createUser, getUserById } from '../data_base/models/user.js';
import { getUser } from './authMiddleware.js';
import { pool } from '../data_base/models/user.js';

const router = express.Router();

// Ruta para obtener todos los usuarios (excluyendo contraseñas)
router.get('/', async (req, res) => {
  try {
    const [users] = await pool.query('SELECT id, username, email FROM usuarios');
    res.json(users);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al obtener usuarios' });
  }
});

// Ruta para obtener un usuario por ID
router.get('/:id', getUser, (req, res) => {
  if (!res.user) {
    return res.status(404).json({ message: 'Usuario no encontrado' });
  }
  res.json(res.user);
});

/// Ruta para registrar un nuevo usuario
router.post('/register', async (req, res) => {
  const { username, email, password } = req.body;

  try {
    // Verificar si el correo ya está registrado
    const [existingUser] = await pool.query('SELECT id FROM usuarios WHERE email = ?', [email]);
    if (existingUser.length > 0) {
      return res.status(400).json({ message: 'El correo electrónico ya está registrado' });
    }

    // Encriptar la contraseña antes de guardarla
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = { username, email, password: hashedPassword };

    // Crear nuevo usuario
    const result = await createUser(newUser);
    res.status(201).json(result);

  } catch (error) {
    res.status(400).json({ message: 'Error al crear usuario', error: error.message });
  }
});

// Ruta de autenticación
router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await authenticateUser(email, password);

    if (user) {
      const token = jwt.sign({ userId: user.id }, 'tu_clave_secreta', { expiresIn: '1h' });
      res.json({ token }); // Enviar el token al frontend
    } else {
      res.status(401).json({ message: 'Credenciales incorrectas' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error interno del servidor' });
  }
});


export default router;
