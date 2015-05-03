var express = require('express');
var bodyParser = require('body-parser');
var greeter = require('./greeter');
var slasher = require('./slasher');
var oldIsGood = require('./oldisgood'); 
 
var app = express();
var port = process.env.PORT || 3000;
 
// body parser middleware
app.use(bodyParser.urlencoded({ 
	extended: true 
}));

//making sure files under /images can be served
app.use(express.static('images'));

app.get('/', function (req, res) { 
	res.status(200).send('Sup bro?'); 
});
 
app.get('/old', function (req, res) { 
	res.status(200).send('old is good'); 
});

app.post('/greetme', greeter);
app.post('/old', oldIsGood);
 
// error handler
app.use(function (err, req, res, next) {
  console.error(err.stack);
  res.status(400).send(err.message);
});
 
app.listen(port, function () {
  console.log('Slack bot listening on port ' + port);
});