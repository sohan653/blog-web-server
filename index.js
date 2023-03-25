// Basic Lib Import
const express = require('express');
const router = require('./src/routes/api');
const app = express();
require('dotenv').config()

// Security Middleware Lib Import
const rateLimit =require('express-rate-limit');
const helmet =require('helmet');
const mongoSanitize =require('express-mongo-sanitize');
const xss =require('xss-clean');
const hpp =require('hpp');
const cors =require('cors');

// Database Lib Import
const mongoose =require('mongoose');
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "https://calm-lebkuchen-a5bb61.netlify.app");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
// Security Middleware Implement
app.use(cors());
app.use(helmet());
app.use(mongoSanitize());
app.use(xss());
app.use(hpp());

app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded({limit: '50mb',extended:true}));

// Request Rate Limit
const limiter= rateLimit({windowMs:15*60*1000,max:3000})
app.use(limiter);

// Mongo DB Database Connection
let URI=process.env.DATABASE
let OPTION={autoIndex:true}
mongoose.connect(URI,OPTION,(error)=>{
    console.log("Connection Success")
    console.log(error)
});

// Routing Implement
app.use("/api/v1",router);

app.use("*",(req,res)=>{
    res.status(404).json({status:"fail",data:"Not Found"})
})


// listen
const PORT = process.env.PORT || 5000;
app.listen(PORT,()=>{
    console.log(`Server running on port ${PORT}`)
})