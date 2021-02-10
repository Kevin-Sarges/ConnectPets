const routes = require('express').Router();
const multer = require('multer');
const pages = require('./controllers/pages');
const multerConfig = require('./controllers/config/multerConfig');

routes.get('/', pages.index);
routes.get('/donate', pages.donate);
routes.get('/information', pages.information);

routes.post('/donate', multer(multerConfig).single('file'), pages.donatePet);

module.exports = routes;