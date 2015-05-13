module.exports = function (req, res) {
  var userName = req.body.user_name;
  var botPayload = {
    text : 'Demory?',
    attachments : [
      {
            fallback: "Demory",
            color: "#033568",
            image_url: "https://botte.herokuapp.com/demory_keg.jpg"
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
