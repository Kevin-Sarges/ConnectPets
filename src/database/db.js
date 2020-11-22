const Database = require('sqlite-async');

function execute(db){
    return db.exec(`
        CREATE TABLE IF NOT EXISTS pets (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            photo TEXT,
            name TEXT,
            race TEXT,
            age TEXT,
            sex TEXT,
            whatsapp TEXT
        );
    `);
}

module.exports = Database.open(__dirname + '/database.sqlite').then(execute);