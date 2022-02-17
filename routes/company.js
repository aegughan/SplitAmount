const { MongoClient } = require('mongodb');
const uri = "mongodb+srv://aegughan:GUGhan%21%4012@cluster-splitamount.wzoqw.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

const express=require('express')
const router=express.Router()

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

async function getCompany(companyId) {
    const client = await MongoClient.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true, }).catch(err => { console.log(err); });
    const database = client.db("SplitAmount");
    const collection = database.collection("Company")
    const result = await collection.find({_id: new ObjectId(companyId)}).toArray();
    console.log('Company Fecthed Successfully', company)
    client.close();
    return result
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

// Company CRUD
router.get('/', async function (req, res) {
    const result = await getAllCompany()
    res.json(result); 
})

router.get('/:id', async function (req, res) {
    console.log('req', req.params.id)
    const result = await getCompany(req.params.id)    
    res.json(result); 
})

router.post('/', async function (req, res) {
    console.log(req.body)
    const result = await createCompany(req.body)
    res.json(result)
})

router.delete('/:id', async function (req, res) {
    console.log(req.body)
    const result = await deleteCompany(req.body)
    res.json(result)
})

module.exports = router