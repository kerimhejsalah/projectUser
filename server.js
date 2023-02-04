
//import express
const express = require('express');


const cors = require('cors');

//connection to db
require('./db/mongoose');

//import routes
const usertApi = require('./routes/user');
const groupeApi = require('./routes/user');


const app = express();

//server port
const port = process.env.PORT || 3000

//cors , json and files config
app.use(cors());

// routes api
app.use('/usertApi', usertApi);
app.use('/groupeApi', groupeApi);
app.get('/', (req, res) => res.status(200).send({ message: "Welcome to the server" }))

//RUNNING SERVER
app.listen(port, () => console.log(`server works on port ${port}`));