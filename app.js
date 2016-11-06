var express = require('express');

var app = express();

app.set('view engine', 'ejs');

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

app.get('/contact', function(req, res){
  res.sendFile(__dirname + '/contacts.html');
});

app.get('/profile/:name', function(req, res){
  var data = {age: 29, job: 'coder'};
    res.render('profile', {person: req.params.name, data: data});
});

app.listen(3000);
console.log('Yo fellas, now listening to port 3000' );
