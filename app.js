/* eslint-disable no-undef */
const express = require('express');
const cors = require('cors');
const dotEnv = require('dotenv');
const mongoose = require('mongoose');
require('colors');
dotEnv.config();

// eslint-disable-next-line no-undef
const PORT = process.env.PORT;
// eslint-disable-next-line no-undef
const dbURI = process.env.MONGO_URI;
const app = express();

app.use(express.json());
app.use(cors());

mongoose
	.connect(dbURI, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	})
	.then(mongo => {
		console.log(`mongodb running on ${mongo.connection.host.rainbow.bold}`);
		app.listen(PORT, () => {
			console.log(`App listening on port ${PORT}!`.yellow.bold);
		});
	})
	.catch(err =>
		console.log("Couldn't connect to MonogoDB,".red.bold, err.message.red)
	);

app.get('/api', (req, res) => {
	res.send({app: 'Todo API running'});
});

app.all('*', (req, res) => {
	res
		.status(404)
		.json(
			`${req.method} - route '${req.originalUrl}' isn't available on Todo api`
		);
});
