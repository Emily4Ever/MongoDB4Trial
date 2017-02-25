//const MongoClient = require('mongodb').MongoClient;
const {MongoClient,ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err,db)=> {
  if(err) {
    return console.log('Unable to connect to mongoDB server');
  }
  console.log('Connected to MongoDB server');
  /*db.collection('Todos').insertOne({
    text: 'something',
    completed: false
  }, (err,result) => {
    if(err) {
      return console.log('Unable to insert todos',err);
    }
    console.log(JSON.stringify(result.ops,undefined,2));
  });  */

  db.collection('Users').insertOne({
  name:'Emiliano',
  age: 43,
  location: 'Rovigo'
}, (err,result) => {
  if(err) {
    return console.log('Unable to insert users',err);
  }
  console.log(JSON.stringify(result.ops,undefined,2));
});

  db.close();
});
