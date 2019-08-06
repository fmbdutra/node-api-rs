const express = require('express');
const mongoose = require('mongoose');
const requireDir = require('require-dir');

//Iniciando app
const app = express();

//Inicializando banco
mongoose.connection('mongodb://localhost:27017/nodeapi', {useNewUrlParser: true});

require('./src/models');

const Product = mongoose.model('Product');

app.use('/api', require('.src/routes'));

app.listen(3001);   