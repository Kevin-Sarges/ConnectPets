function donatePets(db, pet){
    return db.run(`
        INSERT INTO pets(
            photo,
            name,
            race,
            sex,
            age,
            whatsapp
        ) VALUES (
            "${pet.photo}",
            "${pet.name}",
            "${pet.race}",
            "${pet.age}",
            "${pet.sex}",
            "${pet.whatsapp}"
        );
    `);
}

module.exports = donatePets;