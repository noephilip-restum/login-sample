const jwt = require('jsonwebtoken');

const auth = (req, res, next) => {
	if (!req.headers.authorization) {
		return res.status(401).json('Need token');
	}
	try {
		const token = req.headers.authorization.split(' ')[1];
		jwt.verify(token, process.env.SECRET_KEY);

		next();
	} catch (err) {
		console.error(err);
		res.status(401).json('Need correct token');
	}
};

module.exports = auth;
