var http = require('http');
var ejs = require('ejs');
var fs = require('fs');
var ntpClient = require('ntp-client');

http.createServer(function(req,res)
{
  res.writeHead(200, {'Content-Type': 'text/html'});

  fs.readFile('index.html', 'utf-8', function(err, content) 
  {
    if (err) 
    {
      res.end('error occurred');
      return;
    }
 
	// Obtém a data/hora atual
	var data = new Date();

	// Guarda cada pedaço em uma variável
	var dia     = ("00" + data.getDate()).slice(-2);        // 1-31
	var dia_sem = ("00" + data.getDay()).slice(-2);         // 0-6 (zero=domingo)
	var mes     = ("00" + (data.getMonth()+1)).slice(-2);   // 0-11 (zero=janeiro)
	var ano2    = data.getYear();           				// 2 dígitos
	var ano4    = data.getFullYear();       				// 4 dígitos
	var hora    = ("00" + data.getHours()).slice(-2);       // 00-23
	var min     = ("00" + data.getMinutes()).slice(-2);     // 00-59
	var seg     = ("00" + data.getSeconds()).slice(-2);     // 00-59
	var mseg    = data.getMilliseconds();   				// 0-999
	var tz      = data.getTimezoneOffset(); 				// em minutos

	// Formata a data e a hora (note o mês + 1)
	var hora = hora + ':' + min + ':' + seg;	
	var data = dia + '/' + mes + '/' + ano4;

   	var renderedHtml = ejs.render(content, {hora: hora, data: data});  //get redered HTML code
   	res.end(renderedHtml);

  });
}).listen(3000);