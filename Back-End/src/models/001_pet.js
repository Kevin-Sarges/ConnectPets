exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('pets').del()
    .then(function () {
      // Inserts seed entries
      return knex('pets').insert([
        { 
          image: 'imagem01.png',
          age: '4 meses',
          sex: 'macho',
          race: 'Deconhecido',
          name: 'João',
          whatsapp: 111111111111,
          url: 'http://loaclhost:3333/files/imagem01.png'
        }
      ]);
    });
};
