const CryptoJs = require('crypto-js');
const JWT = require('jsonwebtoken');

const passwordToHash = (password) => {
	return CryptoJs.HmacSHA1(password, process.env.PASSWORD_HASH).toString();
};

const generateAccessToken = (user) => {
	return JWT.sign({ name: user }, process.env.ACCESS_TOKEN_SECRET_KEY, {
		expiresIn: '1w',
	});
};
const generateRefreshToken = (user) => {
	return JWT.sign({ name: user }, process.env.REFRESH_TOKEN_SECRET_KEY);
};

module.exports = {
	passwordToHash,
	generateAccessToken,
	generateRefreshToken,
};
