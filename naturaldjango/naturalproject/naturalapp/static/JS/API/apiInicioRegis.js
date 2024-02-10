//Importar los modulos a utilizar
import express from 'express';
import bcrypt from 'bcrypt';              //contraseña segura
import { urlencoded } from 'body-parser';     //para el registro_inisioSesion
import { createConnection } from 'mysql';          //base de datos

//instancia y enrutador
const app = express(); 
const port = 3000; //puerto para ejecutar servidor

app.use(urlencoded({ extended: true }));

// Conexión a la base de datos
const connection = createConnection({
    host: 'localhost',
    user: 'lauradatabase',
    password: '1234567',
    database: 'mydb'
});

connection.connect((err) => {
    if (err) {
        console.error('Error de conexión a la base de datos: ' + err.stack);
        return;
    };
    console.log('Conexión a la base de datos exitosa con el ID ' + connection.threadId);
});

// REGISTRO
app.post('/registro', (req, res) => {
    const email = req.body.email;
    const password = req.body.password;

    // Verificar si el usuario existe
    const selectQuery = 'SELECT * FROM usuarios WHERE email = ?';
    connection.query(selectQuery, [email], (error, results) => {
        if (error) {
            console.error('Error al buscar usuario: ' + error.message);
            return res.status(500).json({ error: 'Error interno del servidor' });
        }

        if (results.length > 0) {
            return res.status(409).json({ error: 'El Email ingresado ya está en uso.' });
        } else {
            // Registrar nuevo usuario en la base de datos
            const insertQuery = 'INSERT INTO usuarios (email, password) VALUES (?, ?)';
            connection.query(insertQuery, [email, password], (error, results) => {
                if (error) {
                    console.error('Error al registrar al usuario: ' + error.message);
                    return res.status(500).json({ error: 'Error interno del servidor' });
                }
                return res.status(201).json({ message: 'Usuario registrado con éxito.' });
            });
        }
    });
});

// INICIO SESIÓN
app.post('/inicio_sesion', (req, res) => {
    const email = req.body.email;
    const password = req.body.password;

    // Buscar usuario por email
    const selectQuery = 'SELECT * FROM usuarios WHERE email = ?';
    connection.query(selectQuery, [email], (error, results) => {
        if (error) {
            console.error('Error al buscar usuario: ' + error.message);
            return res.status(500).json({ error: 'Error interno del servidor' });
        }

        if (results.length === 0) {
            return res.status(401).json({ message: 'Dirección de correo electrónico o contraseña incorrectos' });
        } else {
            const user = results[0];
            // Comparar contraseña
            if (user.password === password) {
                res.json({ message: 'Inicio de sesión exitoso' });
            } else {
                res.status(401).json({ message: 'Dirección de correo electrónico o contraseña incorrectos' });
            }
        }
    });
});

app.listen(port, () => console.log(`Escuchando en el puerto ${port}`));



