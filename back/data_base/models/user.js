import fs from 'fs';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

// Obtener la ruta absoluta del archivo JSON
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const configPath = `${__dirname}/../../config.json`;

// Leer y parsear el archivo JSON
const config = JSON.parse(fs.readFileSync(configPath, 'utf-8'));

import mysql from 'mysql2/promise';

const pool = mysql.createPool(config);

// Ahora puedes seguir con el resto de tu código...


// Función para crear un usuario
export const createUser = async (user) => {
    try {
        const { username, email, password } = user; // Desestructurar las propiedades necesarias

        // Asegúrate de que solo se envíen los campos correctos
        const [result] = await pool.query('INSERT INTO usuarios (username, email, password) VALUES (?, ?, ?)', [username, email, password]);

        if (result.affectedRows === 0) {
            throw new Error('No se pudo crear el usuario');
        }

        // Retornar el ID del usuario creado
        return { id: result.insertId, username, email }; // Solo retorna lo que necesitas
    } catch (error) {
        console.error('Error al crear usuario:', error);
        throw error; // Lanza el error para manejarlo en el controlador de la ruta
    }
};


// Función para obtener un usuario por ID
export const getUserById = async (id) => {
    try {
        const [rows] = await pool.query('SELECT * FROM usuarios WHERE id = ?', [id]);
        return rows[0] || null; // Retorna el primer resultado o null si no existe
    } catch (error) {
        console.error('Error al obtener usuario:', error);
        throw error;
    }
};

// Exportar pool para reutilizarlo en otros archivos
export { pool };
