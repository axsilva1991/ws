var http = require('http');
var server = http.createServer(
    function(req,res){
        res.end("Hello Word");
    }
);
var port = 3000;
server.listen(3000);
console.log("Servidor Node Rodando na porta: "+port);
