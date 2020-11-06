const server = require('./routes');
const port = 5000;

server.listen(process.env.PORT || port, () => {
    console.log(`server iniciado -> http://localhost:${port}`);
});
