var mongoose = require ('mongoose');

var Todo = mongoose.model('Todo',{
  text: {
    type: String,
    required: true,
    minlength:1,
    trim: true
  },
  completed: {
    type: Boolean,
    default: false
  },
  completedAt: {
    type: Number,
    default: null
  }
  });

module.exports = {Todo};

/*
var newTodo = new Todo({
  text: 'Cook dinner'
});
newTodo.save().then((doc) => {
  console.log('Save Todo ', doc)
}, (e) => {
  console.log('Unable to save Todo');
});*/

/*var otherTodo = new Todo({
  text:'Feed the cat',
  completed: false,
  completedAt: 123
});

otherTodo.save().then((doc) => {
  console.log(JSON.stringify(doc,undefined,2));
}, (e) => {
  console.log('Unbale to save');
});*/
