// creatng a server and reading an json file 

var http = require('http');
var fs = require('fs');

var server = http.createServer(function(req, res){
   console.log('req was made : ' + req.url);

   res.writeHead(200,{'Content-Type': 'application/json'});    // 200 status code
   var myObj = {
     name: 'Dawn',
     job: 'Coder',
     age: 19
   };

   res.end(JSON.stringify(myObj) );
});

server.listen(3000, '127.0.0.1');
console.log('yo dwags , now listening to port 3000'); // port reffering app.js file
