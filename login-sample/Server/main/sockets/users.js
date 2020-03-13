const users = [];

const addUser = ({ id, account, room }) => {
	const user = { id, account, room };

	const existingUser = users.find(
		user => user.account.user.id === account.user.id
	);

	if (!existingUser) {
		users.push(user);
	}

	return { user };
};

const removeUser = id => {
	const index = users.findIndex(user => user.id === id);

	if (index !== -1) return users.splice(index, 1)[0];
};

const getUser = id => users.find(user => user.id === id);

const getUsersInRoom = room => users.filter(user => user.room === room);

module.exports = { users, addUser, removeUser, getUser, getUsersInRoom };
