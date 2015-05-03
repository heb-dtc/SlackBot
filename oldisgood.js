module.exports = function (req, res, next) {
  var userName = req.body.user_name;
  var botPayload = {
    username : 'P',
    attachments : [
      {
            fallback: "Old Is Good!",
            color: "#36a64f",
            title: "Slack API Documentation",
            pretext: "Old Is Good Bro'!",
            image_url: "https://botte.herokuapp.com/old_is_good.jpg"
        } 
    ]
  };
 
  // avoid infinite loop
  if (userName !== 'slackbot') {
    return res.status(200).json(botPayload);
  } else {
    return res.status(200).end();
  }
}