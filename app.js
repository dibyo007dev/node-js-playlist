// creatng a server

var http = require('http');

var server = http.createServer(function(req, res){
   console.log('req was made : ' + req.url);
   res.writeHead(200,{'content': 'text/plain'});   // 200 status code
   res.end('hello guys');
});

server.listen(3000, '127.0.0.1');
console.log('yo dwags , now listening to port 3000'); // port reffering app.js file
