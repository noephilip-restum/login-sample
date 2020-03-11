const massive = require('massive');

const db = massive({
	host: 'localhost',
	port: 5432,
	database: 'fogsdb',
	user: 'postgres',
	password: 'fogsdb'
});

module.exports = db;
