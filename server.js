var express = require('express');
var app = express();
var path = require('path');
var PORT = process.env.PORT || 8080;

// define static pages
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function(req, res) {
   res.end('Header Parser microservice - by Maurizio Aru');
});

app.get('/api/whoami', function(req, res) {

	var result = {
	   address: req.headers['x-forwarded-for'] || req.connection.remoteAddress,
	   language: req.headers['accept-language'].split(',')[0],
	   software: req.headers['user-agent'].split('(')[1].split(')')[0],
	}
	
	console.log(req);
	res.json(result);
});

app.listen( PORT, function(){
   console.log("Server listening on port " + PORT + "!");
   console.log("[CTRL+C to exit]");
});
