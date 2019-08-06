const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const requireDir = require('require-dir');


//Iniciando app
const app = express();
app.use(express.json());
app.use(cors());

//Inicializando banco
mongoose.connection('mongodb://localhost:27017/nodeapi', {useNewUrlParser: true});

require('./src/models');

app.use('/api', require('.src/routes'));


app.listen(3001);   