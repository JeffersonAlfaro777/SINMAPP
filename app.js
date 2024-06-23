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
    database: 'sinma'
});

//ruta de archivos estaticos
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));


app.get('/', function(req, res) {
    res.render('index');
});


app.get('/menu', function(req, res) {
    res.render('menu');
});


app.get('/estadisticas', function(req, res) {
    res.render('Estadisticas');
});


app.get('/matricula', function(req,res) {
    res.render('Matricula');
});


app.get('/datos', function(req, res) {
    res.render('Datos');
});



//configuraciones
app.set('view engine', 'ejs');

//configurar el puert usado para el servidor local
app.listen(3000,(function(){
    console.log("el servidor es http://localhost:3000/ "); 
}));
    