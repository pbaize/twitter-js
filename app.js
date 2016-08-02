var express = require('express');
var app = express(); // creates an instance of an express application
var chalk = require('chalk');
var swig = require('swig');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var tweetBank = require('./tweetBank');
var socketio = require('socket.io');


app.engine('html', swig.renderFile);

app.set('view engine', 'html');
app.set('views', __dirname + '/views');
app.use(express.static('public'));

// disables caching
app.set('view cache', false);
swig.setDefaults({ cache: false });

app.use(function(req, res, next) {
    console.log(chalk.blue("Server message"));
    next();
});

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post("/tweets", function (req, res) {
    if (!req.body) return res.sendStatus(400)
    tweetBank.add(req.body.name, req.body.text);
    res.redirect("/");
})

var locals;

var server = app.listen(3000);
var io = socketio.listen(server);


app.use(morgan('combined'));

var routes = require("./routes");
app.use( '/', routes(io) );











// app.get('/people', function(req, res, next) {
//     res.render('index', {
//             title: 'An Example',
//             people: people
//         }
//     );
// });

// app.use('/news', function(req, res, next) {
//     console.log(chalk.green("News message"));
//     next();
// });

// app.get('/', function(req, res) {
//     res.send(["GET /", res.statusCode].join(" "));
// });

// app.get('/news', function(req, res) {
//     res.send("fuck you, worldß!");
// });