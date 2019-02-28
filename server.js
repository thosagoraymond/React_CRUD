const express = require('express'),
morgan = require('morgan'),
cors = require('cors'),
mongoose = require('mongoose'),
secret = require('./config/secret'),
path = require('path');

const app = express();

mongoose.connect(secret.database,{ useNewUrlParser: true }, (err)=>{
    if(err){
        console.log(err.message)
    }
    console.log("connected to the database");
});

app.use(morgan('dev'));

// Routes
var infoRoutes = require('./routes/info.route');

//Using the endpoint results.
app.use(infoRoutes);

//App listening port number
app.listen(secret.port, ()=>{
    console.log("listening on port " + secret.port);
});