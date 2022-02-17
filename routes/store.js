const { MongoClient } = require('mongodb');
const uri = "mongodb+srv://aegughan:GUGhan%21%4012@cluster-splitamount.wzoqw.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

const express=require('express')
const router=express.Router()

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

async function getStore(storeId) {
    const client = await MongoClient.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true, }).catch(err => { console.log(err); });
    const database = client.db("SplitAmount");
    const collection = database.collection("Store")
    const result = await collection.find({_id: new ObjectId(storeId)}).toArray();
    console.log('Store Fecthed Successfully', store)
    client.close();
    return result
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

// Store CRUD 
router.get('/', async function (req, res) {
    const result = await getAllStore()
    res.json(result); 
})

router.get('/:id', async function (req, res) {
    console.log('req', req.params.id)
    const result = await getStore(req.params.id)    
    res.json(result); 
})

router.post('/', async function (req, res) {
    console.log(req.body)
    const result = await createStore(req.body)
    res.json(result)
})

router.delete('/:id', async function (req, res) {
    console.log(req.body)
    const result = await deleteStore(req.body)
    res.json(result)
})

module.exports = router