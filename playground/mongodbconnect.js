// const MongoClient = require('mongodb').MongoClient;
const {MongoClient} = require('mongodb');
const url = 'mongodb://localhost:27017';

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {

    if (err) {
        return console.log('Unable to connect to the database!');
    }
    const db = client.db('TodoApp');
    console.log('Successfully connected to the database.');

    // db.collection('TodoList').insertOne({
    //     task: 'Play with Dejo',
    //     completed: false
    // }, (err, rslts) => {

    //     if (err){
    //         return console.log(`Unable to add data to database: ${err}`);
    //     }
    //     console.log('Data successfully added!');
    //     console.log(JSON.stringify(rslts, undefined, 2));
    // })

    client.close();
})