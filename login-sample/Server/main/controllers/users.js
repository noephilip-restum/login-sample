const argon2 = require('argon2');
const jwt = require('jsonwebtoken');

const getAllUsers = async (req, res) => {
	const db = req.app.get('db');
	try {
		const users = await db.users.find();
		res.status(200).json(users);
	} catch (error) {
		console.error(err);
		res.status(500).end();
	}
};

const createUsers = async (req, res) => {
	const db = req.app.get('db');
	const { name, email, password, has_agreed } = req.body;
	try {
		const hash = await argon2.hash(password);
		const exist = await db.users.findOne({ email });

		if (exist) {
			throw new Error('Email already exist');
		} else {
			db.users
				.insert({
					name,
					email,
					password: hash,
					has_agreed
				})
				.then(user => {
					const token = jwt.sign({ userId: user.id }, process.env.SECRET_KEY);
					delete user.password;
					res.status(201).json({ ...user, token });
				});
		}
	} catch (error) {
		if (error.message) {
			return res.status(300).json(error.message);
		} else {
			console.error(error);
			res.status(500).end();
		}
	}
};

const loginUsers = async (req, res) => {
	const db = req.app.get('db');
	const { email, password } = req.body;

	try {
		const user = await db.users.findOne({ email });

		if (user) {
			const isValid = await argon2.verify(user.password, password);
			if (isValid) {
				const token = jwt.sign({ userId: user.id }, process.env.SECRET_KEY);
				delete user.password;
				res.status(200).json({ ...user, token });
			} else {
				throw new Error('Invalid password');
			}
		} else {
			throw new Error('Invalid email');
		}
	} catch (error) {
		if (error.message) {
			res.status(300).json(error.message);
		} else {
			console.error(error);
			res.status(500).end();
		}
	}
};

module.exports = { getAllUsers, createUsers, loginUsers };
