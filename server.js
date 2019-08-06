const express = require('express');
const mongoose = require('mongoose');
const requireDir = require('require-dir');

//Iniciando app
const app = express();

//Inicializando banco
mongoose.connection('mongodb://localhost:27017/nodeapi', {useNewUrlParser: true});

require('./src/models');

app.use('/api', require('.src/routes'));
app.use(express.json());

app.listen(3001);   