const express = require('express');
const database = require('./db');
const routes = require('./routes');
const cors = require('cors');

require('dotenv').config();

database.then(db => {
	const app = express();

	app.use(cors());
	app.set('db', db);
	app.use(express.json());

	app.use(routes);

	const port = process.env.PORT || '4000';
	app.listen(port, () => console.log(`Server is listening on port ${port}`));
});
