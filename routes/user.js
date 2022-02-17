const { MongoClient } = require('mongodb');
const uri = "mongodb+srv://aegughan:GUGhan%21%4012@cluster-splitamount.wzoqw.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

const express=require('express')
const router=express.Router()

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

async function getUser(userId) {
    const client = await MongoClient.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true, }).catch(err => { console.log(err); });
    const database = client.db("SplitAmount");
    const collection = database.collection("User")
    const result = await collection.find({_id: new ObjectId(userId)}).toArray();
    console.log('User Fecthed Successfully', user)
    client.close();
    return result
}

async function createUser(userData) {
    console.log('Create User Called', userData)
    const client = await MongoClient.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true, }).catch(err => { console.log(err); });
    const database = client.db("SplitAmount");
    const collection = database.collection("User")
    const result = await collection.insertOne(userData)
    console.log('User Created Successfully', JSON.stringify(result))
    return result
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

router.get('/',  async function (req, res) {
    const result = await getAllUser()
    res.json(result); 
})

router.get('/User/:id', async function (req, res) {
    console.log('req', req.params.id)
    const result = await getUser(req.params.id)    
    res.json(result); 
})

router.post('/User', async function (req, res) {
    console.log(req.body)
    const result = await createUser(req.body)
    res.json(result)
})

router.delete('/User/:id', async function (req, res) {
    console.log(req.body)
    const result = await deleteUser(req.body)
    res.json(result)
})

module.exports = router