var request = require('request');
 
module.exports = function (req, res, next) {
	var botPayload = {
    username : 'botte',
    channel : req.body.channel_id,
    attachments : [
      {
            "fallback": "Old Is Good!",

            "color": "#36a64f",

            "title": "Slack API Documentation",
            "title_link": "https://api.slack.com/",

            "pretext": "Old Is Good Bro'!",

            "image_url": "https://botte.herokuapp.com/old_is_good.jpg"
        } 
    ]
  };
	send(botPayload);
};
 
function send (payload) {
  var uri = 'https://hooks.slack.com/services/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';
 
  request({
    uri: uri,
    method: 'POST',
    body: JSON.stringify(payload)
  });
}