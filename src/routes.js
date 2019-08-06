const express = require('express');
const routes = exoress.Router();    
const ProductController = require('./controllers/ProductController');

routes.get('/products/:id', ProductController.show);
routes.get('/products', ProductController.index);
routes.post('/products', ProcuctController.store);
routes.put('/products/:id', ProcuctController.update);
routes.delete('/products/:id', ProcuctController.destroy);

module.exports = routes;