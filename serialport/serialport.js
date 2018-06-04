//node serialport.js COM1   (exemplo)
var serialport = require('serialport');
var portName = process.argv[2];

var myPort = new serialport(portName, {
    baudRate: 9600,
    parser: new serialport.parsers.Readline('\r\n')
});

myPort.on('open', onOpen);
myPort.on('data', onData);

function onOpen(){
    console.log('Open connections!');
}

function onData(data){
    console.log('on Data ' + data);
}