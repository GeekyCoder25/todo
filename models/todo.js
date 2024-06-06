const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TodoModel = new Schema(
	{
		messageBody: {
			type: String,
			required: [true, 'Provide todo message'],
		},
	},
	{timestamps: true}
);

module.exports = mongoose.model('todo', TodoModel);
