/**
 *   Header Parser microservice
 *
 *   author  : Maurizio Aru (http://www.ginopc.it)
 *   created : 2017.04.26
 */
var express = require('express');
var app = express();
var PORT = process.env.PORT || 8080;

app.get('/', function(req, res) {
   res.end('Header Parser microservice - by Maurizio Aru');
});

app.get('/api/whoami', function(req, res) {
  var address = req.headers['x-forwarded-for'] || req.connection.remoteAddress
  var language = req.acceptsLanguages();
  var software = req.headers['user-agent'].split('(')[1].split(')')[0]

	var result = {
	   address: address.split(',')[0],
	   language: language[0],
	   software: software,
	}
	
	res.json(result);
});

app.listen( PORT, function(){
   console.log("Server listening on port " + PORT + "!");
   console.log("[CTRL+C to exit]");
});
