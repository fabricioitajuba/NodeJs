var dgram = require("dgram");
var server = dgram.createSocket("udp4", function(msg, rinfo){
	console.log("Recebidos " + rinfo.size + " bytes");
	console.log("de " + rinfo.address + ":" + rinfo.port);
	console.log("A mensagem é: " + msg.toString());
});

server.bind(3000);