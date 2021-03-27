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
			
		console.log(req.file.originalname);	

			const pet = {
				image: req.file.originalname,
				age,
				sex,
				race,
				name,
				whatsapp,
				url: `http://localhost:3333/files/${urlImage}`
			};

			await knex('pets').insert(pet);

			return res.status(201).json({ 'dados': 'salvos' });
		} catch (error) {
			next(error);
		}
	},

	async deleteDonate(req, res, next) {
		try {
			const { id } = req.params;
			await knex('pets').where({ id }).del();

			return res.status(201).json({ 'Doação': 'deletada' });
		} catch (error) {
			next(error);
		}
	}
}
