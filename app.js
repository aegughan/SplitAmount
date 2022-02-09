const { MongoClient } = require('mongodb');
const uri = "mongodb+srv://aegughan:GUGhan%21%4012@cluster-splitamount.wzoqw.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

async function createUser(userData) {
    console.log('Create User Called', userData)
    const client = await MongoClient.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true, }).catch(err => { console.log(err); });
    const database = client.db("SplitAmount");
    const collection = database.collection("User")
    const result = await collection.insertOne(userData)
    console.log('User Created Successfully', JSON.stringify(result))
    return result
}

async function getAllUser() {
    console.log('Get All User Called')
    const client = await MongoClient.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true, }).catch(err => { console.log(err); });
    const database = client.db("SplitAmount");
    const collection = database.collection("User")
    const allUsers = await collection.find({}).toArray();
    console.log('User Fecthed Successfully', allUsers)
    client.close();
    return allUsers
}

async function deleteUser(userData) {
    console.log('Delete User Called', userData)
    const client = await MongoClient.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true, }).catch(err => { console.log(err); });
    const database = client.db("SplitAmount");
    const collection = database.collection("User")
    const result = await collection.deleteOne(userData)
    console.log('User Delete Successfully', JSON.stringify(result))
    return result
}

var express = require('express');
var app = express();
app.use(express.json());

app.get('/User', async function (req, res) {
    const result = await getAllUser()
    res.json(result); 
})

app.post('/User', async function (req, res) {
    console.log(req.body)
    const result = await createUser(req.body)
    res.json(result)
})

app.delete('/User', async function (req, res) {
    console.log(req.body)
    const result = await deleteUser(req.body)
    res.json(result)
})



var server = app.listen(8081, function () {   
   console.log("App listening at http://localhost:8081/")
})