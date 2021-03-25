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

			const trx = await knex.transaction();
	
			const pet = {
				file: req.file.filename,
				age,
				sex,
				race,
				name,
				whatsapp,
			};

			await trx('pets').insert(pet);

			return res.status(201).json({ 'dados': 'salvos' });
		} catch (error) {
			next(error);
		}
	}
}
