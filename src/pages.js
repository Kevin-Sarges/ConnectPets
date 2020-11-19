const express = require('express');
const server = express();

server.get('/', (req, res) => {
    return res.sendFile(__dirname + '/view/index.html');
});

server.get('/donate', (req, res) => {
    return res.sendFile(__dirname + '/view/donate.html');
});

server.get('/adoption',  (req, res) => {
    return res.sendFile(__dirname + '/view/adoption.html');
});

server.use(express.static('public'));

module.exports = server;