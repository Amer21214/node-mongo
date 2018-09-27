// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');
const url = 'mongodb://localhost:27017';

MongoClient.connect(url, {useNewUrlParser: true}, (err, client) => {

    if (err) {
        return console.log('Unable to connect to the database!');
    }
    const db = client.db('TodoApp');
    console.log('Successfully connected to the database.');

    // deleteMany

    // db.collection('Users').deleteMany({location: 'Kambelovac'}).then((result) => {
    //     console.log(result);
    // })

    // deleteOne

    // db.collection('TodoList').deleteOne({text: 'Go to sleep'}).then((result) => {
    //     console.log(result);
    // })

    // findAndDeleteOne

    db.collection('Users').findOneAndDelete({"_id" : ObjectID("5ba7d1a61bb836f6474eda28")}).then((result) => {
        console.log(result);
    })

    // client.close();
})