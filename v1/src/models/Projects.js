const Mongoose = require('mongoose');
const logger = require('../scripts/logger/Projects');

const ProjectSchema = Mongoose.Schema(
	{
		name: String,
		// user_id: {
		//   type: Mongoose.Types.ObjectId,
		//   red: "user",
		// },
	},
	{
		timestamps: true,
		versionKey: false,
	}
);

ProjectSchema.post('save', (doc) => {
	console.log('Sonrası', doc);
	logger.log({
		level: 'info',
		message: doc,
	});
});

module.exports = Mongoose.model('project', ProjectSchema);
