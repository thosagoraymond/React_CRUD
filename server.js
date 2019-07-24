const express = require('express'),
morgan = require('morgan'),
cors = require('cors'),
mongoose = require('mongoose'),
secret = require('./config/secret'),
path = require('path');
var bodyParser = require('body-parser');

const app = express();

mongoose.connect(secret.database,{ useNewUrlParser: true }, (err)=>{
    if(err){
        console.log(err.message)
    }
    console.log("connected to the database");
});

app.use(morgan('dev'));
app.use(bodyParser.json({limit: '200mb'}));
app.use(bodyParser.urlencoded({ extended: true, limit: '200mb', parameterLimit: 100000}));
app.use(cors({origin: ["http://localhost:3000", "http://localhost:3001"], credentials: true}));

// Routes
var infoRoutes = require('./routes/info.route');

//Using the endpoint results.
app.use(infoRoutes);

//App listening port number
app.listen(secret.port, ()=>{
    console.log("listening on port " + secret.port);
});