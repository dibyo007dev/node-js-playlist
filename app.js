var express = require('express');

var app = express();

app.set('view engine', 'ejs');
app.use('/assets', function());

app.get('/', function(req, res){
  res.render('index');
});

app.get('/contact', function(req, res){
  res.render('contacts');
});

app.get('/profile/:name', function(req, res){
  var data = {age: 29, job: 'coder', hobbies: ['eating', 'fighting', 'coding']};
    res.render('profile', {person: req.params.name, data: data});
});

app.listen(3000);
console.log('Yo fellas, now listening to port 3000' );
