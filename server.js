// Dependencies
// =============================================================
// import Node File System module express 
var express = require('express');

// import Node File System module body-parser - middleware
var bodyParser = require('body-parser');

// import Node File System module method-override
var methodOverride = require('method-override');
// =============================================================

// create an instance of express by running the express function
var app = express();

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static(process.cwd() + '/public'));

// returns middleware that parses URL encoded bodies//
app.use(bodyParser.urlencoded({
	extended: false
}));

// override with POST having ?_method=DELETE
app.use(methodOverride('_method'));

// create an instance of express handlebars
// this allows access to the full API
var exphbs = require('express-handlebars');
app.engine('handlebars', exphbs({
	defaultLayout: 'main'
}));

// register the template engine
app.set('view engine', 'handlebars');

// local dependency - routes = express.router for all routes
var routes = require('./controllers/burgers_controller.js');
// bind routes to root
app.use('/', routes);

var port = 3000;
app.listen(port);