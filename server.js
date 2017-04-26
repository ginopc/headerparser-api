var express = require('express');
var app = express();
var path = require('path');
var PORT = process.env.PORT || 8080;

// define static pages
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function(req, res){
	res.send('hello world!');
});

app.listen( PORT, function(){
   console.log("Server listening on port " + PORT + "!");
   console.log("[CTRL+C to exit]");
});
