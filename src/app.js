//importar libreria//
import express from "express";
import matriculaRoutes from "./routes/matricula.routes.js";

const HOST = 'http://172.19.64.1'
const API = '/sinma-api-rest'
const PORT = 3005 || 3000
//objeto para llamar metodos de express
const app = express();

//ruta de archivos estaticos
app.use(express.json());
app.use(express.static('public'));

//configuraciones
app.set('view engine', 'ejs');

app.use(`${API}/matricula`, matriculaRoutes)

//configurar el puert usado para el servidor local
app.listen(PORT, (function () {
    console.log(`El servidor es ${HOST}:${PORT}${API} `);
}));

