
exports.up = function(knex) {
  return knex.schema.createTable('pets', (table) => {
    table.increments('id').primary();
		table.string('image').notNullable();
		table.string('age').notNullable();
		table.string('sex').notNullable();
		table.string('race').notNullable();
		table.string('name').notNullable();
		table.integer('whatsapp').notNullable();
		table.string('url').notNullable();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('pets');
};
