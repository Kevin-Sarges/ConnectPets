const Database = require('sqlite-async');

function execute(tablePets) {
  return tablePets.exec(`
		CREATE TABLE IF NOT EXISTS pets (
			id INTEGER PRIMARY KEY AUTOINCREMENT,
			file TEXT,
			name TEXT,
			race TEXT,
			age TEXT,
			sex TEXT,
			whatsapp TEXT
		);
	`);
}

module.exports = Database.open(__dirname + './database.sqlite').then(execute);
