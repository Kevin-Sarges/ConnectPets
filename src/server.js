const express = require('express');
const server = express();
const path = require('path');
const pages = require('./pages');
const port = 5000;

server.use(express.urlencoded({ extended: true}));
server.use(express.static('public'));

server.set('views',path.join(__dirname, 'views'));
server.set('view engine', 'hbs');

server.get('/', pages.index);
server.get('/adoption', pages.adoption);
server.get('/donate', pages.donate);
server.post('/save-donate', pages.donatePet);

server.listen(process.env.PORT || port, () => {
    console.log(`server iniciado -> http://localhost:${port}`);
});
