var request = require('request');
var common = require('./common');
 
module.exports = function (req, res, next) {
  var botPayload = {
    username : 'botte',
    channel : req.body.channel_id,
    text : 'Sup Bro?',
    attachments : [{
            fallback: "Sup Bro?",
            color: "#FF0000",
            image_url: "https://botte.herokuapp.com/bros.gif"
    }]
  };
  
  send(botPayload, function (error, status, body) {
    if (error) {
      return next(error);
    } else if (status !== 200) {
      return next(new Error('Bro WebHook failed miserably: ' + status + ' ' + body));
    } else {
      return res.status(200).end();
    }
  });
  res.end();
};
 
function send (payload, callback) {
  request({
      uri: common.uri,
      method: 'POST',
      body: JSON.stringify(payload)
  },  function (error, response, body) {
        if (error) {
          return callback(error);
        }
        callback(null, response.statusCode, body);
  });
}
