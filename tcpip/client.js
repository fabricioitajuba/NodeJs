var net = require("net");
var clientSocket = net.connect({
	port: 3000,
	host: "192.168.0.2"
});

clientSocket.setEncoding("utf8");

clientSocket.on("data", function(data){
	process.stdout.write(data);
});