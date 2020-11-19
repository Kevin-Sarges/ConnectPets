const express = require('express');
const routes = express();

routes.get('/', (req, res) => {
    return res.sendFile(__dirname + '/view/index.html');
});

routes.get('/donate', (req, res) => {
    return res.sendFile(__dirname + '/view/donate.html');
});

routes.get('/adoption',  (req, res) => {
    return res.sendFile(__dirname + '/view/adoption.html');
});

routes.use(express.static('public'));

module.exports = routes;