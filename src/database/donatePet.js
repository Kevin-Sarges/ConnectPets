function donatePets(db, pet){
    return db.run(`
        INSERT INTO pets(
            name,
            race,
            sex,
            whatsapp,
            age,
            photo
        ) VALUES (
            "${pet.name}",
            "${pet.race}",
            "${pet.sex}",
            "${pet.whatsapp}",
            "${pet.age}",
            "${pet.photo}"
        );
    `);
}

module.exports = donatePets;