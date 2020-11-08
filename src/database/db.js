const Database = require('sqlite-async');

function execute(db){
    return db.exec(`
        CREATE TABLE IF NOT EXISTS pets (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT,
            race TEXT,
            sex TEXT,
            whatsapp TEXT,
            age TEXT,
            photo TEXT
        );
    `);
}

module.exports = Database.open(__dirname + '/database.sqlite').then(execute);