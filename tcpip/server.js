var net = require("net");
var server = net.createServer(function(socket){
	socket.end("Olá e adeus!\n");
});
server.listen(8000);
