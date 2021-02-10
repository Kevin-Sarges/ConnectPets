const Database = require('../models/tablePets');
const insertTable = require('../models/insertTable');

module.exports = {
  async index(req, res) {
		try {
			const db = await Database;
			const adoption = await db.all('SELECT * FROM pets');
			//return res.render('/', { adoption });
			return res.json(adoption);
		} catch {
			console.error('Erro ao mosta os dados do banco de dados');
			return res.send('Erro no banco de dados');
		}
	},

	donate(req, res) {
		return res.send('Donate');
	},

	information(req, res) {
		return res.send('Information');
	},

	async donatePet(req, res) {
		const urlImage = req.file;
		const fielsds = req.body;

		if (Object.values(fielsds).includes('')) {
			return res.send('Todos os campos devem ser preenchidos!');
		}

		try {
			const db = await Database;
			await insertTable(db, {
				file: `http://localhost:3333/files/${urlImage.filename}`,
				name: fielsds.name,
				race: fielsds.race,
				age: fielsds.age,
				sex: fielsds.sex,
				whatsapp: fielsds.whatsapp,
			});
			return res.send('Dados salvos!!');
			// return res.redirect('/');
		} catch (error) {
			console.log(error);
			return res.send('Erro no no banco de dados!');
		}
	}
}