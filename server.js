// Import necessary packages.
var express = require('express');
var app = express();

// Let Heroku set the application port or set it ourselves.
var port = process.env.PORT || 3000;

// Set the view engine as EmbeddedJS (EJS).
app.set('view engine', 'ejs');

// Make express look in the public directory for assets.
app.use(express.static(__dirname + '/public'));

// Set the home page route.
app.get('/', function(req, res) {
  res.render('index');
});

app.listen(port, function() {
  console.log('penpen is running on http://localhost:' + port);
});
