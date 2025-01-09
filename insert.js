const { MongoClient } = require('mongodb');

async function insertDocument() {
    const uri = 'mongodb://localhost:27017'; // Replace with your MongoDB URI
    const client = new MongoClient(uri);

    try {
        await client.connect();
        const db = client.db('exampleDB');
        const collection = db.collection('exampleCollection');

        const result = await collection.insertOne({ name: 'John', age: 30 });
        console.log('Document inserted with _id:', result.insertedId);
    } finally {
        await client.close();
    }
}

insertDocument().catch(console.error);
