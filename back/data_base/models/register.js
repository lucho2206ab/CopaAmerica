import bcrypt from 'bcrypt';
import { createUser } from './user.js'; 
import { pool } from './user.js';

export const registerUser = async (userData) => {
    try {
        // Validación de datos básicos (por ejemplo, si faltan campos)
        if (!userData.username || !userData.email || !userData.password) {
            throw new Error('Todos los campos son obligatorios');
        }

        // Encriptar la contraseña antes de guardarla
        const hashedPassword = await bcrypt.hash(userData.password, 10);

        // Crear objeto de nuevo usuario con la contraseña encriptada
        const newUser = {
            username: userData.username,
            email: userData.email,
            password: hashedPassword,
            
        };

        // Llamar a createUser para guardar el usuario en la base de datos
        const result = await createUser(newUser);

        // Retornar el resultado (puedes retornar solo el ID del usuario, un mensaje de éxito, etc.)
        return result;
    } catch (error) {
        console.error('Error al registrar el usuario:', error);
        throw error;
    }
};
export const findUserByEmail = async (email) => {
    try {
        const [rows] = await pool.query('SELECT * FROM usuarios WHERE email = ?', [email]);
        return rows[0] || null; // Retorna el primer resultado o null si no existe
    } catch (error) {
        console.error('Error al buscar usuario por email:', error);
        throw error;
    }
};