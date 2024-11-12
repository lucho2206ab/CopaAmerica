import bcrypt from 'bcrypt';
import { pool } from './user.js';
import jwt from 'jsonwebtoken';

export const generateToken = (user) => {
  return jwt.sign(
    { id: user.id, username: user.username },
    process.env.JWT_SECRET,
    { expiresIn: '1h' }
  );
};

export const authenticateUser = async (username, password) => {
  console.log('Username recibido:', username);

  const [rows] = await pool.query(
    'SELECT * FROM usuarios WHERE username = ?',
    [username]
  );
  
  const user = rows[0];
  console.log('Usuario encontrado:', user);

  if (user) {
    const passwordIngresada = password.trim();
    console.log('Contraseña ingresada:', passwordIngresada);
    console.log('Contraseña en base de datos (hasheada):', user.password);

    const isMatch = await bcrypt.compare(passwordIngresada, user.password);
    console.log('¿Las contraseñas coinciden?', isMatch);

    if (isMatch) {
      console.log('Usuario autenticado:', user);
      return user;
    } else {
      console.log('Autenticación fallida: contraseñas no coinciden.');
      return null;
    }
  } else {
    console.log('Usuario no encontrado.');
    return null;
  }
};
