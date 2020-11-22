const Database = require('./db');
const donatePets = require('./donatePet');

Database.then( async(db) => {
    /*await donatePets(db, {
        photo: "https://source.unsplash.com/random".toString(),
        name: "Kett Sarges",
        race: "Pastor alemão",
        sex: "femia",
        age: "3 meses",
        whatsapp: "999839137"
    });*/

    const selecterPets = await db.all('SELECT * FROM pets');
    console.log(selecterPets);

    // console.log(await db.run('DELETE FROM pets WHERE id = "2"'));
});