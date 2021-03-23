const express = require('express');
const path = require('path');
const cors = require('cors');
const app = express();
const port = 3333;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(require('./routes'));
app.use('/files', express.static(path.resolve(__dirname, '..', 'uploads')));

app.listen(port || process.env.PORT, () => {
	console.log(`Server iniciado em http://localhost:${port}`);
});
