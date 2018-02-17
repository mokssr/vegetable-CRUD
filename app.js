const express = require('express');
const app = express();
const port = 3000;

//importing dependencies
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

//using body parser
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

//connect to remote db
let ConnectionController = require('./controllers/ConnectionController');
ConnectionController(mongoose);

//importing controller
let VegetableController = require('./controllers/VegetableController');

//calling controller
VegetableController(app);

app.listen(port,
    console.log('app running on port : '+port)
);