var express = require('express');
var app = express(); // creates an instance of an express application
var chalk = require('chalk');
var swig = require('swig');
var morgan = require('morgan');

app.engine('html', swig.renderFile);

app.set('view engine', 'html');
app.set('views', __dirname + '/views');

// disables caching
app.set('view cache', false);
swig.setDefaults({ cache: false });

var routes = require("./routes");
app.use('/', routes);

var locals;

var people =[{
                name: 'Gandalf'
            }, {
                name: 'Gollum'
            }, {
                name: 'Hermione'
            }];

app.listen(3000, function() {
    console.log('server listening');
});

app.use(morgan('combined'))

app.use(function(req, res, next) {
    console.log(chalk.blue("Server message"));
    next();
});







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