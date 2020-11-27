const Database = require('./db');
const donatePets = require('./donatePet');

Database.then( async(db) => {
    await donatePets(db, {
        photo: "https://cdn.pixabay.com/photo/2019/07/12/21/47/kitten-4333662_960_720.jpg".toString(),
        name: "Kett Sarges",
        race: "Desconhecida",
        sex: "Macho",
        age: "1 meses",
        whatsapp: "88888888"
    });

    const selecterPets = await db.all('SELECT * FROM pets');
    console.log(selecterPets);

    // console.log(await db.run('DELETE FROM pets WHERE id = "4"'));
});