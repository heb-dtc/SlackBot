var request = require('request');
 
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
};
 
function send (payload, callback) {
  var uri = 'https://hooks.slack.com/services/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';

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
