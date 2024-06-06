const todo = require('../models/todo');

const getAllTodo = async (req, res) => {
	try {
		const allTodo = await todo.find({}).sort('-createdAt');

		res.status(200).json({
			status: true,
			message: 'Todo data fetched successfully',
			data: allTodo,
			totalCount: allTodo.length,
		});
	} catch (error) {
		console.log(error.message);
		res.status(400).json({status: false, message: "Can't fetch` todo data"});
	}
};

const postTodo = async (req, res) => {
	try {
		if (!req.body.messageBody) throw new Error('Provide todo message');
		const data = await todo.create({messageBody: req.body.messageBody});
		console.log(data);
		res
			.status(201)
			.json({status: true, message: 'Todo created successfully', data});
	} catch (error) {
		res.status(400).json({status: false, message: error.message});
	}
};
const updateTodo = async (req, res) => {
	try {
		if (!req.body.messageBody)
			throw new Error('Provide todo message to update');
		const data = await todo.findByIdAndUpdate(req.body._id, {
			messageBody: req.body.messageBody,
		});
		res
			.status(200)
			.json({status: true, message: 'Todo updated successfully', data});
	} catch (error) {
		res.status(400).json({status: false, message: "Can't update todo data"});
	}
};

const deleteTodo = async (req, res) => {
	try {
		const data = await todo.findByIdAndDelete(req.body._id);
		res
			.status(204)
			.json({status: true, message: 'Todo deleted successfully', data});
	} catch (error) {
		res.status(400).json({status: false, message: "Can't delete todo data"});
	}
};

module.exports = {
	getAllTodo,
	postTodo,
	updateTodo,
	deleteTodo,
};
