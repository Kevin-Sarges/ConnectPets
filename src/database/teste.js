const Database = require('./db');
const donatePets = require('./donatePet');

Database.then( async(db) => {
    /*await donatePets(db, {
        photo: "https://source.unsplash.com/random".toString(),
        name: "Kevin Sarges",
        race: "Pastor alemão",
        sex: "femia",
        age: "3 meses",
        whatsapp: "999999999"
    });*/

    const selecterPets = await db.all('SELECT * FROM pets');
    console.log(selecterPets);

    // console.log(await db.run('DELETE FROM pets WHERE id = "4"'));
});