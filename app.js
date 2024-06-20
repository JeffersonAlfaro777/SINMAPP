//importar libreria//
const express = require("express");
const mysql = require('mysql');

//objeto para llamar metodos de express
const app = express();


// Configuración de la conexión a la base de datos
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'sinmapp'
});

//ruta de archivos estaticos
app.use(express.static('public'));

//configuraciones
app.set('view engine', 'ejs');

//configurar el puert usado para el servidor local
app.listen(3000,(function(){
    console.log("el servidor es http://localhost:3000/ "); 
}));
    
