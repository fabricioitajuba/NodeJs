var dgram = require("dgram");
var client = dgram.createSocket("udp4");
var message = new Buffer("Glória á Deus!");

client.send(message, 0, message.length, 3000, "127.0.0.1",
	function(error, bytes){
		if (error){
			console.error("Ocorreu um erro durante o envio");
		} else{
			console.log("Enviou " + bytes + " bytes com sucesso");
		}
		client.close();
	});