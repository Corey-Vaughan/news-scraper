// ===================
//    DEPENDENCIES
// ===================
const express    = require('express');
const exphbs     = require('express-handlebars');
const mongoose   = require('mongoose');
const cheerio    = require('cheerio');
const bodyParser = require('body-parser');
const request    = require('request');
const logger     = require('morgan');

// ====================
//    EXPRESS INIT
// ====================
var app = express();
app.use(logger('dev'));
app.use(bodyParser.urlencoded({ extended: false }));

// Serve static content
app.use(express.static(process.cwd() + '/public'));

// Handlebars Setup
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

// ====================
//       MONGO DB
// ====================
// If deployed, use the deployed database. Otherwise use the local mongoHeadlines database
var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/newsScraper";

// Set mongoose to leverage built in JavaScript ES6 Promises
// Connect to the Mongo DB
mongoose.Promise = Promise;
mongoose.connect(MONGODB_URI, {
  useMongoClient: true
});

var db = mongoose.connection;

// Show mongoose errors
db.on('error', function(err) {
    console.log('Mongoose Error: ' + err);
});

// Show success message
db.on('open', function() {
    console.log('Mongoose connection successful.');
});


// ====================
//       ROUTING
// ====================
var router = require('./routes/route');
app.use('/', router);

// ====================
//     LAUNCH APP
// ====================
var port = process.env.PORT || 3000;
app.listen(port, function() {
    console.log('The magic is happening on port: ' + port);
});