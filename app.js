// creatng a server and piping the readme to response

var http = require('http');
var fs = require('fs');

var server = http.createServer(function(req, res){
   console.log('req was made : ' + req.url);
   var myReadStream = fs.createReadStream(__dirname +'/readit.txt', 'utf8');

      res.writeHead(200,{'content': 'text/plain'});    // 200 status code
   myReadStream.pipe(res);
});

server.listen(3000, '127.0.0.1');
console.log('yo dwags , now listening to port 3000'); // port reffering app.js file
