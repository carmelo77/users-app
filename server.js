const express = require('express');
const path = require('path');

const bodyParser = require('body-parser');
const morgan = require('morgan');
const mongoose = require('mongoose');

const app = express();

const apiRouter = require('./routes/api_v1');

//BD 
mongoose.connect('mongodb://localhost/meandb');

//Middlewares
app.use(morgan('dev')); //Poder ver por console las peticiones al servidor.
app.use(bodyParser.json()); //Entender la api en JSON.

//Api routes
app.use('/', apiRouter);

//Static Files
app.use(express.static(path.join(__dirname, '/public/dist')));

app.listen(3000, () => {
    console.log('server on port:3000');
});