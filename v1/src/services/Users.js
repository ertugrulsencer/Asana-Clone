const Users = require('../models/Users');

const insert = (userData) => {
	const users = new Users({ ...userData });
	return users.save();
};
const list = () => {
	return Users.find();
};
const loginUser = (loginData) => {
	return Users.findOne(loginData);
};

module.exports = { insert, list, loginUser };
