const express = require('express');
const mongoose = require('mongoose');

//Iniciando app
const app = express();

//Inicializando banco
mongoose.connection('mongodb://localhost:27017/nodeapi', {useNewUrlParser: true});

app.listen(3001);

app.get('/', (req, res) => {
res.send('Hello World');
});


