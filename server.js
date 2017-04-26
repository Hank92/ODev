var request = require('request'),
	cheerio = require('cheerio'),
	express = require('express'),
	app = express(),
	mongoose = require('mongoose'),
	bodyParser = require('body-parser'),
	methodOverride = require('method-override');
	morgan = require('morgan'),
	path = require('path'),
	cookieParser = require('cookie-parser'),
	session      = require('express-session');
	mongoosePaginate = require('mongoose-paginate');

//configuration//
var configDB = require('./config/database.js');
mongoose.connect(configDB.url);
	app.use(express.static(path.normalize(__dirname) + '/views'))
	app.use(morgan('dev')); // log every request to the console
	app.use(bodyParser());// pull information from html in POST
	app.use(bodyParser.json());	 //setting app to use bodyParser
	app.use(bodyParser.urlencoded({extended: true}));
	app.use(cookieParser());
	app.use(methodOverride());

	app.set('views', path.normalize(__dirname) + '/views/html');
	app.set('view engine', 'html')
	app.set('view engine', 'ejs'); //set up ejs for templating
app.set('port', (process.env.PORT || 5000));
// routes ======================================================================
require('./app/routes.js')(app); // load our routes and pass in our app

//start the server
app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});