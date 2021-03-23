const knex = require('../database');

module.exports = {
  async index(req, res, next) {
		try {
			const listPets = await knex.select().table('pets');

			return res.json(listPets);
		} catch (error) {
			next(error);
		}
	},

	donate(req, res, next) {
		return res.render('Donate');
	},

	information(req, res, next) {
		return res.render('Information');
	},

	async donatePet(req, res, next) {
		const urlImage = req.file;
		const fielsds = req.body;

		if (Object.values(fielsds).includes('')) {
			return res.send('Todos os campos devem ser preenchidos!');
		}

		try {
			await knex('pets').insert({
				file: `http://localhost:3333/files/${urlImage.filename}`,
				name: fielsds.name,
				race: fielsds.race,
				age: fielsds.age,
				sex: fielsds.sex,
				whatsapp: fielsds.whatsapp,
			});

			return res.status(201).json({ 'dados': 'salvos' });
		} catch (error) {
			console.log(error);
			return res.send('Erro no no banco de dados!');
		}
	}
}
