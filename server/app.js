const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const morgan = require("morgan");
const cors = require("cors");

// const cookieParser = require("cookie-parser")


// initialise midellwares

app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use(morgan("dev"));

// app.use(cookieParser());


// handle corss origin manually 

// app.use((req,res,next) => {
//     req.header('Access-controll-Allow-origin', '*'),
//     req.header('Access-controll-Allow-Methods', 'GET,POST,DELETE,PUT,PETCH,UPDATE'),
//     req.header('Access-controll-Allow-Headers', 'Origin, X-Requested-with, Content-Type, Accept, Authorization')
//     next();
// })

app.get('/', (req, res) => {

    res.send('Hello, World! Project using node js');
    
});

// app.use('/api/v1', require('./routers'));


module.exports = app;