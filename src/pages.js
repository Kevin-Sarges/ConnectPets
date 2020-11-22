const Database = require('./database/db');
const donatePet = require('./database/donatePet');

module.exports = {
    index(req, res) {
        return res.render('index');
    },

    async adoption(req, res) {
        try {
            const db = await Database;
            const adoption = await db.all('SELECT * FROM pets');
            return res.render('adoption', { adoption });
        } catch (error) {
            console.log(error);
            return res.send('Erro no banco de dados!');
        }
    },

    donate(req, res) {
        return res.render('donate');
    },

    async donatePet(req, res) {
        const fielsds = req.body;

        if(Object.values(fielsds).includes('')){
            return res.send('Todos os campos devem ser preenchidos!');
        }

        try {
            const db = await Database
            await donatePet(db, {
                photo: fielsds.photo.toString(),
                name: fielsds.name,
                race: fielsds.race,
                age: fielsds.age,
                sex: fielsds.sex,
                whatsapp: fielsds.whatsapp,
            });

            return res.redirect('/adoption');

        } catch (error) {
            console.log(error)
            return res.send('Erro no banco de dados!')
        }
    }
}