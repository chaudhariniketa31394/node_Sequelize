const express = require('express'),
app = express(),
route = require('./routes/Routes')
var path = require('path');
bodyParser = require('body-parser')    
 sequelize = require("./config/config.sequelize.js");
const Models = require("./models")
port = process.env.PORT || 3000;
const mysql = require('mysql');
bodyParser = require('body-parser');
// const morgan = require('morgan');
// const winston = require('./app/config/winston');
//const cors = require('cors');

app.listen(port);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use('/users', route);
console.log('API server started on: ' + port);
Models.sequelize.sync({force: false, alter : true}).then(res => {
    console.log("Connection has been established successfully.");
  })
  .catch(err => {
    console.error("Unable to connect to the database:", err);
  });


  sequelize.authenticate()
  .then(res => {
    console.log("Connection has been established successfully.");
  })
  .catch(err => {
    console.error("Unable to connect to the database:", err);
  });