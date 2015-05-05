var express = require('express');
var bodyParser = require('body-parser');
var greeter = require('./greeter');
var slasher = require('./slasher');
var oldIsGood = require('./oldisgood'); 
var bro = require('./bro'); 
 
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

//Slack outgoing webhooks
//react to "oi" being posted on any channel
app.post('/greetme', greeter);
//react to "#old" being posted on any channel
app.post('/old', oldIsGood);

//Slack incoming webhook example
//react to "/english" being posted on any channel
app.post('/englishpliz', slasher);
app.post('/bro', bro);
 
// error handler
app.use(function (err, req, res, next) {
  console.error(err.stack);
  res.status(400).send(err.message);
});

//start the app
app.listen(port, function () {
  console.log('Slack bot listening on port ' + port);
});
