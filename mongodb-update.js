//const MongoClient = require('mongodb').MongoClient;
const {MongoClient,ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err,db)=> {
  if(err) {
    return console.log('Unable to connect to mongoDB server');
  }
  console.log('Connected to MongoDB server');

  db.collection('Users').findOneAndUpdate({
    _id : new ObjectID('58ae040db7c8cb1f20d16289')
  }, {
    $set: {
      name: 'Spiller'
    },
    $inc:{
      age: 1
    }
  }, {
    returnOriginal: false
  }).then((result)=> {
    console.log(result);
  });
  db.close();
});
