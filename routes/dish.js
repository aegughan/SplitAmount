const { MongoClient } = require('mongodb');
const uri = "mongodb+srv://aegughan:GUGhan%21%4012@cluster-splitamount.wzoqw.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

const express=require('express')
const router=express.Router()

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

async function getDish(dishId) {
    const client = await MongoClient.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true, }).catch(err => { console.log(err); });
    const database = client.db("SplitAmount");
    const collection = database.collection("Dish")
    const result = await collection.find({_id: new ObjectId(dishId)}).toArray();
    console.log('Dish Fecthed Successfully', dish)
    client.close();
    return result
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

// Dish CRUD
router.get('/', async function (req, res) {
    const result = await getAllDish()
    res.json(result); 
})

router.get('/:id', async function (req, res) {
    console.log('req', req.params.id)
    const result = await getDish(req.params.id)    
    res.json(result); 
})

router.post('/', async function (req, res) {
    console.log(req.body)
    const result = await createDish(req.body)
    res.json(result)
})

router.delete('/:id', async function (req, res) {
    console.log(req.body)
    const result = await deleteDish(req.body)
    res.json(result)
})

module.exports = router