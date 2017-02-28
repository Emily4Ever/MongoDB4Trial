var mongoose = require('mongoose');

var User = mongoose.model('User', {
  email: {
    type: String,
    required: true,
    trim: true,
    minleght: 1
  }
});

/*
var newUser = new User ({
  email: "   emi@spi.com  "
});

newUser.save().then((doc) => {
  console.log(JSON.stringify(doc,undefined,2));
}, (e) => {
  console.log('Unbale to save');
});
*/
