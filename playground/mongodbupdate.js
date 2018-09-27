// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');
const url = 'mongodb://localhost:27017';

MongoClient.connect(url, {useNewUrlParser: true}, (err, client) => {

    if (err) {
        return console.log('Unable to connect to the database!');
    }
    const db = client.db('TodoApp');
    console.log('Successfully connected to the database.');

    db.collection('Users').findOneAndUpdate({
        name: 'Petar Jercic'
    },
    {
        $inc : {
            age: 1
        },
        $set : {
            name: "Ivan Tadin"
        }
    }
    ).then((result) => {
        console.log(result);
    })

    

    // client.close();
})