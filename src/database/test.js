const Database = require('./db');
const donatePets = require('./donatePet');

Database.then( async(db) => {
    /*await donatePets(db, {
        name: "Kett Sarges",
        race: "Pastor alemão",
        sex: "femia",
        whatsapp: "999839137",
        age: "3 meses",
        photo: "https://source.unsplash.com/random".toString()
    });*/

    const selecterPets = await db.all('SELECT * FROM pets');
    console.log(selecterPets);
});