const express = require('express');
const mysql = require('mysql');


const app = express();


// Configuración de la conexión a la base de datos
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'sinmapp'
});


// Establecer conexión a la base de datos
connection.connect((err) => {
    if (err) {
        console.error('Error de conexión:', err);
        return;
    }
    console.log('Conexión establecida correctamente');
});

// Ruta para obtener datos de la base de datos
app.get('/data', (req, res) => {
    connection.query('SELECT * FROM Hechos_Estudiante', (err, rows) => {
        if (err) {
            console.error('Error al ejecutar consulta:', err);
            res.status(500).send('Error interno del servidor');
            return;
        }
        res.json(rows);
    });
});


// Ruta para servir el archivo HTML
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/Index.html');
});


// Iniciar el servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor en ejecución en el puerto ${PORT}`);
});




 
