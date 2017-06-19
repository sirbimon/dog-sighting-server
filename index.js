var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var _ = require('lodash');

var dogs = []
var id = 0

app.get(/dogs, function(req, res) {
  res.json(dogs);
});

app.get('/dogs/:id', function(req, res){
  var dog = _.find(dogs, {id: req.params.id});
  res.json(dogs || {});
});

app.post('/dogs', function(req, res) {
  var dog = req.body;
  id++;
  dog.id = id + ''; //coerced into a string to store, because we store id as a string.

  dogs.push(dog);

  res.json(dog);
});

app.put('/dogs/:id', function(req, res) {
  var update = req.body;
  if (update.id) { //this checks if there's actually an id property inside the
    delete update.id
  }

  var dog = _.findIndex(dogs, {id: req.params.id});
  if (!dogs[dog]) {
    res.send();
  } else {
    var updatedDog = _.assign(dogs[dog], update);
    res.json(updatedDog);
  }
});

app.delete('/dogs/:id', function(req, res)) {
  var dog = _.findIndex(dog, {id: req.params.id});
  if (!dogs[dog]) {
    res.send()
  } else {
    var deletedDog = dogs[dog];
    lions.splice(dog, 1)
    res.json(deletedDog)
  }
}

app.listen(3000);
console.log('on port 3000');
