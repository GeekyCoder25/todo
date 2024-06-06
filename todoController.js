const todo = require('../models/todo');

const getAllTodo = (req, res) => {
	try {
		const allTodo = todo.find({}).sort('-createdAt');

		res.status(200).json({
			status: true,
			message: 'Todo data fetched successfully',
			data: allTodo,
		});
	} catch (error) {
		res.status(400).json({status: false, message: "Can't fetch` todo data"});
	}
};

const postTodo = (req, res) => {
	try {
		const data = todo.save({body: req.body.messageBody});

		res
			.status(201)
			.json({status: true, message: 'Todo created successfully', data});
	} catch (error) {
		res.status(400).json({status: false, message: "Can't save todo"});
	}
};
const updateTodo = (req, res) => {
	try {
		const data = todo.findByIdAndUpdate(req.body._id, {
			body: req.body.messageBody,
		});
		res
			.status(200)
			.json({status: true, message: 'Todo updated successfully', data});
	} catch (error) {
		res.status(400).json({status: false, message: "Can't update todo data"});
	}
};

const deleteTodo = (req, res) => {
	try {
		const data = todo.findByIdAndDelete(req.body._id);
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
