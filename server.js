var express = require('express');
var app = express();

// set the port of our application
// process.env.PORT lets the port be set by Heroku
var port = process.env.PORT || 8080;

// set the view engine to ejs
app.set('view engine', 'ejs');

// make express look in the public directory for assets (css/js/img)
app.use(express.static(__dirname + '/public'));

// set the home page route
app.get('/', function(req, res) {

	// ejs render automatically looks in the views folder
	res.render('index');
});

app.listen(port, function() {
	console.log('Our app is running on http://localhost:' + port);
});

var pg = require('pg');
var connectionString = "postgres://rbpyipkiscqxdo:7333cbd816457ffab9deaf27e761aa5087d8c8df57e9f449ea1dbf4493e71fd1@ec2-54-235-86-226.compute-1.amazonaws.com:5432/d992vcfkvqt2jn"

pg.connect(connectionString, function(err, client, done) {
   client.query('SELECT * FROM salesforce.account', function(err, result) {
      done();
      if(err) return console.error(err);
      console.log(result.rows);
   });
});