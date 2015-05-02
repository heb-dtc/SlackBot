var express = require('express');
var bodyParser = require('body-parser');
var bot = require('./aldana');
 
var app = express();
var port = process.env.PORT || 3000;
 
// body parser middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('images'));
 
// test route
app.get('/', function (req, res) { 
	res.status(200).send('Hello world!') 
});
 
app.get('/old', function (req, res) { 
	res.status(200).send('old is good') 
});

app.post('/old', bot);
 
// error handler
app.use(function (err, req, res, next) {
  console.error(err.stack);
  res.status(400).send(err.message);
});
 
app.listen(port, function () {
  console.log('Slack bot listening on port ' + port);
});