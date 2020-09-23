const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const helmet = require('helmet');
require('dotenv').config();

const app = express();

app.use(helmet());
app.use(morgan('tiny'));
app.use(cors());
app.use(express.json());
app.use(express.static('./public'));

app.get('/', (req, res) => {
	res.json({
		message: 'Short Urls Provided Upon Request',
	});
});

app.get('/:id', (req, res) => {
	// TODO: get a short url by id
});

app.post('/url', (req, res) => {
	// TODO: create a short URL
});

app.get('/url/:id', (req, res) => {
	// TODO: retrieve info from API about the short url
});

const port = process.env.PORT || 3001;

app.listen(port, () => {
	try {
		console.log(`Listening at http://localhost:${port}`);
	} catch (err) {
		console.log(error);
	}
});
