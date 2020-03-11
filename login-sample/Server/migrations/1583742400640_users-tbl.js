/* eslint-disable camelcase */

exports.shorthands = undefined;

exports.up = pgm => {
	pgm.createTable('users', {
		id: {
			type: 'serial',
			primaryKey: true
		},
		name: {
			type: 'text',
			notNull: true
		},
		email: {
			type: 'text',
			notNull: true
		},
		password: {
			type: 'text',
			notNull: true
		},
		has_agreed: {
			type: 'boolean',
			notNull: true
		}
	});
};

exports.down = pgm => {};
