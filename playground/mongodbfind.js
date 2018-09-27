// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');
const url = 'mongodb://localhost:27017';

MongoClient.connect(url, {useNewUrlParser: true}, (err, client) => {

    if (err) {
        return console.log('Unable to connect to the database!');
    }
    const db = client.db('TodoApp');
    console.log('Successfully connected to the database.');

    // db.collection("TodoList").find({
    //     _id: new ObjectID('5b9ce1d2339f3f06e6eeba49')
    // }).toArray().then((theList) => {
    //     console.log('TodoList');
    //     console.log(JSON.stringify(theList, undefined, 2));
    // }, (err) => {
    //     console.log("Error occured. Sorry.");
    // })

    // db.collection("TodoList").find().count().then((theList) => {
    //     console.log('TodoList');
    //     console.log(JSON.stringify(theList, undefined, 2));
    // }, (err) => {
    //     console.log("Error occured. Sorry.");
    // })

    db.collection("Users").find({
        name: "Ivan Tadin"
    }).toArray().then((theList) => {
        console.log(JSON.stringify(theList, undefined, 2));
    }, (err) => {
        console.log("Couldn't get results, sorry.");
    });

    // client.close();
})