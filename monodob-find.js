//const MongoClient = require('mongodb').MongoClient;
const {MongoClient,ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err,db)=> {
  if(err) {
    return console.log('Unable to connect to mongoDB server');
  }
  console.log('Connected to MongoDB server');
  /*db.collection('Todos').find({_id: new ObjectID('58ae0180a79729184c8f53a5')}).toArray().then((docs) => {
    console.log('Todos');
    console.log(JSON.stringify(docs,undefined,2));
  }, (err) => {
    console.log('Unable to find Todos');
  });*/
  db.collection('Todos').find().count().then((count) => {
    console.log(`Number of Todos is ${count}`);

  }, (err) => {
    console.log('Unable to find Todos');
  });
  db.close();
});
