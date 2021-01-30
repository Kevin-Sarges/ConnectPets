const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
	res.send('Teste de rotas');
});

app.listen(port || process.env.PORT, () => {
	console.log(`Server iniciado em http://localhost:${port}`);
});