var request = require('request');
 
module.exports = function (req, res, next) {
  var botPayload = {
    username : 'botte',
    channel : req.body.channel_id,
    text : 'English Pliz!',
    attachments : [{
            fallback: "English Pliz!",
            color: "#FF0000",
            image_url: "https://botte.herokuapp.com/english_pliz.gif"
    }]
  };
  
  send(botPayload, function (error, status, body) {
    if (error) {
      return next(error);
    } else if (status !== 200) {
      return next(new Error('Enlgish Pliz WebHook failed miserably: ' + status + ' ' + body));
    } else {
      return res.status(200).end();
    }
  });
};
 
function send (payload, callback) {
  var uri = 'your-incoming-webhook-url-here';

  request({
      uri: uri,
      method: 'POST',
      body: JSON.stringify(payload)
  },  function (error, response, body) {
        if (error) {
          return callback(error);
        }
        callback(null, response.statusCode, body);
  });
}
