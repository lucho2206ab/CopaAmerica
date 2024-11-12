import { getUserById } from '../data_base/models/user.js';  
import jwt from 'jsonwebtoken';

// Middleware para obtener un usuario por ID
export async function getUser(req, res, next) {
    try {
        const user = await getUserById(req.params.id);
        if (!user) {
            return res.status(404).json({ message: 'Usuario no encontrado' });
        }
        res.user = user;  // Asigna el usuario al objeto res
        next();
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const secretKey = 'secret'; // Debe coincidir con la clave utilizada para firmar el token

export const verifyToken = (req, res, next) => {
  const token = req.headers['authorization']?.split(' ')[1]; // Obtener el token del encabezado

  if (!token) {
    return res.status(403).json({ message: 'Token no proporcionado' });
  }

  jwt.verify(token, secretKey, (err, decoded) => {
    if (err) {
      return res.status(401).json({ message: 'Token no válido' });
    }

    // Almacenar el usuario en la solicitud para uso posterior
    req.user = decoded;
    next();
  });
};