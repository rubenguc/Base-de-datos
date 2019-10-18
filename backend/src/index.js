const express = require('express');
const app = express();
const cors = require('cors')

//middlewares
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors());

//gregando las rutas
app.use(require('./Routes/index'));

app.listen(3001);
console.log('servidor en el puerto 3001');