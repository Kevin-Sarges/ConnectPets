const routes = require('express').Router();
const multer = require('multer');
const controller = require('./controllers/controllersDonates');
const multerConfig = require('./config/multerConfig');

routes.get('/', controller.index);

routes.post('/donate', multer(multerConfig).single('image'), controller.donatePet);

routes.delete('/delete/:id', controller.deleteDonate);

module.exports = routes;
