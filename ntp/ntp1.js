var ntpClient = require('ntp-client');
 
ntpClient.getNetworkTime("a.st1.ntp.br", 123, function(err, date) {
    if(err) {
        console.error(err);
        return;
    }
 
    console.log("Current time : ");
    console.log(date); // Mon Jul 08 2013 21:31:31 GMT+0200 (Paris, Madrid (heure d’été))
 
});

