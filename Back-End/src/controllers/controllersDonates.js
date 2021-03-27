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

	async donatePet(req, res, next) {
		try {
			const {
				age,
				sex,
				race,
				name,
				whatsapp,
			} = req.body;

			const urlImage = req.file.filename;
			const originalName = req.file.originalname;
			console.log(originalName);

			const pet = {
				image: originalName,
				age,
				sex,
				race,
				name,
				whatsapp,
				url: `http://loaclhost:3333/files/${urlImage}`
			};

			await knex('pets').insert(pet);

			return res.status(201).json({ 'dados': 'salvos' });
		} catch (error) {
			next(error);
		}
	}
}
