const { MongoClient } = require("mongodb");
const url = 'mongodb+srv://Sinister:ReI!u61JI@Bswzb@cluster0.9lwqvdx.mongodb.net/';
const database = 'mydatabase';

async function connectToDatabase(){
    const client = new MongoClient(url, {useNewUrlParser: true, useUnifiedTopology:true});
    await client.connect();
    return client.db(database);
}
async function createCollection(myCollection){
    const db = await connectToDatabase();
    await db.createCollection(myCollection);
    console.log(`Collection '${myCollection}' created successfully.`)
}
async function removeCollection(myCollection){
    const db = await connectToDatabase();
    await db.dropCollection(myCollection);
    console.log(`Collection '${myCollection}' removed successfully.`)
}
async function insertDocument(myCollection, document){
    const db = await connectToDatabase();
    const collection = db.collection(myCollection);
    const result = await collection.insertOne(document);
    console.log(`Document '${result}' added to the collection successfully.`)
}
async function deleteDocument(myCollection, documentID){
    const db = await connectToDatabase();
    const collection = db.collection(myCollection);
    const result = await collection.deleteOne({_id: documentID});
    console.log(`Document '${result}' has been deleted.`);
}
module.exports = {
    createCollection,
    removeCollection,
    insertDocument,
    deleteDocument,
};