var ntpClient = require('ntp-client');
 
ntpClient.getNetworkTime("a.st1.ntp.br", 123, function(err, date) {
    if(err) {
        console.error(err);
        return;
    }
 
    //console.log("Current time : ");
    //console.log(date); // Mon Jul 08 2013 21:31:31 GMT+0200 (Paris, Madrid (heure d’été))

    var dataehora = date.toString();	
	console.log(dataehora);

	var hora = dataehora.substring(16, 24);
	console.log("Hora= "+hora);

	var semana = dataehora.substring(0, 4)
	var dia = dataehora.substring(8, 10);
	var mes = dataehora.substring(4, 7);
	var ano = dataehora.substring(11, 15);

	console.log("Data= "+semana+dia+"/"+mes+"/"+ano);
});

