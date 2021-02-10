const { donate, donatePets } = require("../controllers/pages");

function insertTable(tablePets, pet) {
  return tablePets.run(`
		INSERT INTO pets(
			file,
			name,
			race,
			age,
			sex,
			whatsapp
		) VALUES (
			"${pet.file}",
			"${pet.name}",
			"${pet.race}",
			"${pet.age}",
			"${pet.sex}",
			"${pet.whatsapp}"
		);
	`);
}

module.exports = insertTable;