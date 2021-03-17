
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('pets').del()
    .then(function () {
      // Inserts seed entries
      return knex('pets').insert([
        { 
          file: 'http://loaclhost:3333/imagem01',
          name: 'João',
          race: 'Deconhecido',
          age: '4 meses',
          sex: 'macho',
          whatsapp: '111111111111',
        }
      ]);
    });
};
