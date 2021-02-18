
const knex = require('knex')({
	client: 'sqlite',
	connection: () => {
		filesize: '../../../Back-End/src/models/database.sqlite'
	}
});