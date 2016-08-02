var express = require( 'express' );
var app = express(); // creates an instance of an express application
var chalk = require('chalk');

app.listen(3000 ,function(){
	console.log('server listening');
});

app.use(function( req, res, next){
	console.log(chalk.blue("Server message"));
	next();
});

app.use('/news', function( req, res, next){
	console.log(chalk.green("News message"));
	next();
});

app.get('/', function(req, res){
	res.send( ["GET /", res.statusCode].join(" ") );
});

app.get('/news', function(req, res){
	res.send("fuck you, world!");
});



