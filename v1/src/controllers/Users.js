const { insert, list, loginUser } = require('../services/Users');
const httpStatus = require('http-status');
const {
	passwordToHash,
	generateAccessToken,
	generateRefreshToken,
} = require('../scripts/utils/helper');

const create = (req, res) => {
	req.body.password = passwordToHash(req.body.password);
	insert(req.body)
		.then((response) => {
			res.status(httpStatus.CREATED).send(response);
		})
		.catch((e) => {
			res.status(httpStatus.INTERNAL_SERVER_ERROR).send(e);
		});
};

const index = (req, res) => {
	list()
		.then((data) => {
			res.status(httpStatus.OK).json(data);
		})
		.catch((e) => res.status(httpStatus.INTERNAL_SERVER_ERROR).send(e));
};

const login = (req, res) => {
	req.body.password = passwordToHash(req.body.password);
	loginUser(req.body)
		.then((user) => {
			if (!user) {
				return res
					.status(httpStatus.NOT_FOUND)
					.send({ message: 'Böyle bir kullanıcı bulunmamaktadır.' });
			}
			user = {
				...user.toObject(),
				tokens: {
					access_token: generateAccessToken(user),
					refresh_token: generateRefreshToken(user),
				},
			};
			delete user.password;
			res.status(httpStatus.OK).send(user);
		})
		.catch((err) =>
			res.status(httpStatus.INTERNAL_SERVER_ERROR).send(err)
		);
};

module.exports = { create, index, login };
