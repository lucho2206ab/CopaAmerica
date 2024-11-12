import bcrypt from 'bcrypt';

// La contraseña original que se está comparando
const password = '1234'; // Cambia esto a la contraseña que desees probar

// El hash que quieres verificar
const hashedPassword = '$2b$10$L/MuV4Y00e1kUeFcqdzLiuYZBybr533o/ytazvvu.4bePJ4NIJBDW'; // Reemplaza con el hash real de tu base de datos

// Función para comparar contraseñas
const comparePasswords = async () => {
  const match = await bcrypt.compare(password, hashedPassword);
  console.log('¿Las contraseñas coinciden?', match); // Debería imprimir true o false
};

// Llama a la función
comparePasswords();
