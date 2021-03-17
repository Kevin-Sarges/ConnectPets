exports.up = function(knex) {
  return knex.schema.createTable('pets', function(table) {
		table.increments('id').primary();
		table.string('file');
		table.string('name');
		table.string('race');
		table.string('age');
		table.string('sex');
		table.integer('whatsapp');
	});
};

exports.down = function(knex) {
  return knex.schema.dropTable('pets');
};
