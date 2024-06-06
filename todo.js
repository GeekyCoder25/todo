const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TodoModel = new Schema(
	{
		body: {
			type: String,
			required: [true, 'Provide todo message'],
		},
	},
	{timestamps: true}
);

module.exports = mongoose.model('update-test', TodoModel);
