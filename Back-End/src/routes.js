const routes = require('express').Router();
const multer = require('multer');
const controller = require('./controllers/controllersDonates');
const multerConfig = require('./config/multerConfig');

routes.get('/', controller.index);
routes.get('/donate', controller.donate);
routes.get('/information', controller.information);

routes.post('/donate', multer(multerConfig).single('file'), controller.donatePet);

module.exports = routes;