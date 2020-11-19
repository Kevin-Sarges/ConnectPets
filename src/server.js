const server = require('./pages');
const port = 5000;

server.listen(process.env.PORT || port, () => {
    console.log(`server iniciado -> http://localhost:${port}`);
});
