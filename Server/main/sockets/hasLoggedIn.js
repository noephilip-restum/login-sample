const {
	users,
	addUser,
	removeUser,
	getUser,
	getUsersInRoom
} = require('./users');

const hasLoggedIn = (socket, io, db) => {
	socket.on('loggedIn', ({ account, room }) => {
		const { user } = addUser({ id: socket.id, account, room });

		socket.join(user.room);
		socket.to(user.room).emit('online', users);
	});
};

module.exports = { hasLoggedIn };
