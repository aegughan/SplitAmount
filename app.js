const { MongoClient } = require('mongodb');
const ObjectId = require('mongodb').ObjectId; 
const uri = "mongodb+srv://aegughan:GUGhan%21%4012@cluster-splitamount.wzoqw.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

const userRoute = require('./routes/user.js')
const storeRoute = require('./routes/store.js')
const dishRoute = require('./routes/dish.js')
const companyRoute = require('./routes/company.js')
var express = require('express');
var app = express();
app.use(express.json());

app.use('/User', userRoute)
app.use('/Store', storeRoute)
app.use('/Dish', dishRoute)
app.use('/Company', companyRoute)

var server = app.listen(8081, function () {   
   console.log("App listening at http://localhost:8081/")
})