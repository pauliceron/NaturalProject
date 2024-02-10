//conexion DB
const mysql = require('mysql');
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'lauradatabase',
    password: '1234567',
    database: 'mydb'
});
connection.connect();
//enviar formulario
document.getElementById('miFormulario').addEventListener('submit', (event) => {
    event.preventDefault();
    const tipoTurismo = document.querySelector('input[name="turismo"]:checked').value;
    const nombreEstablecimiento = document.getElementById('nombre-establecimiento').value;
    const nombreEncargado = document.getElementById('nombre-encargado').value;
    const ubicacion = document.getElementById('ubicacion').value;
    const numeroContacto = document.getElementById('numero-contacto').value;
  // Crear objeto con los datos del formulario
    const datosFormulario = {
        tipoTurismo,
        nombreEstablecimiento,
        nombreEncargado,
        ubicacion,
        numeroContacto
    };
    enviarDatosAlServidor(datosFormulario);
});
