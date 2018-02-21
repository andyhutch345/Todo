const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');

//sets up express app
const app = express();

//log requests to the console
app.use(logger('dev'));

//parse incoming requests data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

require('./server/routes')(app);
//setup default catch-all route that returns welcome in JSON
app.get('*', (req, res) => res.status(200).send({
	message: 'Welcome to nada.',
}));

module.exports = app;
