const { MongoClient } = require('mongodb');
const uri = "mongodb+srv://aegughan:GUGhan%21%4012@cluster-splitamount.wzoqw.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

// User data call
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
    console.log('User Deleted Successfully', JSON.stringify(result))
    return result
}

// Store Data Call
async function createStore(storeData) {
    console.log('Create Store Called', storeData)
    const client = await MongoClient.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true, }).catch(err => { console.log(err); });
    const database = client.db("SplitAmount");
    const collection = database.collection("Store")
    const result = await collection.insertOne(storeData)
    console.log('Store Created Successfully', JSON.stringify(result))
    return result
}

async function getAllStore() {
    console.log('Get All Store Called')
    const client = await MongoClient.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true, }).catch(err => { console.log(err); });
    const database = client.db("SplitAmount");
    const collection = database.collection("Store")
    const allStores = await collection.find({}).toArray();
    console.log('Store Fecthed Successfully', allStores)
    client.close();
    return allStores
}

async function deleteStore(storeData) {
    console.log('Delete Store Called', storeData)
    const client = await MongoClient.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true, }).catch(err => { console.log(err); });
    const database = client.db("SplitAmount");
    const collection = database.collection("Store")
    const result = await collection.deleteOne(storeData)
    console.log('Store Deleted Successfully', JSON.stringify(result))
    return result
}

// Dish Data Call
async function createDish(dishData) {
    console.log('Create Dish Called', dishData)
    const client = await MongoClient.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true, }).catch(err => { console.log(err); });
    const database = client.db("SplitAmount");
    const collection = database.collection("Dish")
    const result = await collection.insertOne(dishData)
    console.log('Dish Created Successfully', JSON.stringify(result))
    return result
}

async function getAllDish() {
    console.log('Get All Dish Called')
    const client = await MongoClient.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true, }).catch(err => { console.log(err); });
    const database = client.db("SplitAmount");
    const collection = database.collection("Dish")
    const allDishs = await collection.find({}).toArray();
    console.log('Dish Fecthed Successfully', allDishs)
    client.close();
    return allDishs
}

async function deleteDish(dishData) {
    console.log('Delete Dish Called', dishData)
    const client = await MongoClient.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true, }).catch(err => { console.log(err); });
    const database = client.db("SplitAmount");
    const collection = database.collection("Dish")
    const result = await collection.deleteOne(dishData)
    console.log('Dish Deleted Successfully', JSON.stringify(result))
    return result
}

// Company Data Call
async function createCompany(companyData) {
    console.log('Create Company Called', companyData)
    const client = await MongoClient.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true, }).catch(err => { console.log(err); });
    const database = client.db("SplitAmount");
    const collection = database.collection("Company")
    const result = await collection.insertOne(companyData)
    console.log('Company Created Successfully', JSON.stringify(result))
    return result
}

async function getAllCompany() {
    console.log('Get All Company Called')
    const client = await MongoClient.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true, }).catch(err => { console.log(err); });
    const database = client.db("SplitAmount");
    const collection = database.collection("Company")
    const allCompanys = await collection.find({}).toArray();
    console.log('Company Fecthed Successfully', allCompanys)
    client.close();
    return allCompanys
}

async function deleteCompany(companyData) {
    console.log('Delete Company Called', companyData)
    const client = await MongoClient.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true, }).catch(err => { console.log(err); });
    const database = client.db("SplitAmount");
    const collection = database.collection("Company")
    const result = await collection.deleteOne(companyData)
    console.log('Company Deleted Successfully', JSON.stringify(result))
    return result
}

var express = require('express');
var app = express();
app.use(express.json());

// User CRUD 
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

// Store CRUD 
app.get('/Store', async function (req, res) {
    const result = await getAllStore()
    res.json(result); 
})

app.post('/Store', async function (req, res) {
    console.log(req.body)
    const result = await createStore(req.body)
    res.json(result)
})

app.delete('/Store', async function (req, res) {
    console.log(req.body)
    const result = await deleteStore(req.body)
    res.json(result)
})

// Dish CRUD
app.get('/Dish', async function (req, res) {
    const result = await getAllDish()
    res.json(result); 
})

app.post('/Dish', async function (req, res) {
    console.log(req.body)
    const result = await createDish(req.body)
    res.json(result)
})

app.delete('/Dish', async function (req, res) {
    console.log(req.body)
    const result = await deleteDish(req.body)
    res.json(result)
})

// Dish CRUD
app.get('/Company', async function (req, res) {
    const result = await getAllCompany()
    res.json(result); 
})

app.post('/Company', async function (req, res) {
    console.log(req.body)
    const result = await createCompany(req.body)
    res.json(result)
})

app.delete('/Company', async function (req, res) {
    console.log(req.body)
    const result = await deleteCompany(req.body)
    res.json(result)
})



var server = app.listen(8081, function () {   
   console.log("App listening at http://localhost:8081/")
})