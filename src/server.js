const routes = require('./routes');
const port = 5000;

routes.listen(process.env.PORT || port, () => {
    console.log(`server iniciado -> http://localhost:${port}`);
});
