var http =require ('http');
const calc =require('./export.js');
const date = require('./date.js')

const add =calc.add(10,20);
const sub =calc.sub(10,50);

http.createServer(function(req,res){
    res.writeHead(200,{'Content-Type':'text/html'});
    res.write('helllo world'+add+sub+"<br>");
    res.end('baha')
}).listen(5055);