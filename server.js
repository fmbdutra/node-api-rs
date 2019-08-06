const express = require('express');
const mongoose = require('mongoose');
const requireDir = require('require-dir');

//Iniciando app
const app = express();

//Inicializando banco
mongoose.connection('mongodb://localhost:27017/nodeapi', {useNewUrlParser: true});

require('./src/models');

const Product = mongoose.model('Product');

app.listen(3001);   

app.get('/', (req, res) => {
    Product.create({
        title: 'Empresa',
        description: 'Adicao 1',
        url: 'http://www.github.com.br'
    });
    
    return res.send('Hello World');
});


