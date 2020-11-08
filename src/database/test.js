const Database = require('./db');
const donatePets = require('./donatePet');

Database.then( async(db) => {
    await donatePets(db, {
        name: "Kevin Sarges",
        race: "Desconhecida",
        sex: "macho",
        whatsapp: "919839137",
        age: "1 ano",
        photo: "https://source.unsplash.com/random".toString()
    });

    const selecterPets = await db.all('SELECT * FROM pets');
    console.log(selecterPets);
});