module.exports = function (req, res) {
  var userName = req.body.user_name;
  var botPayload = {
    text : 'Old Is Good Bro!',
    attachments : [
      {
            fallback: "Old Is Good!",
            color: "#FF0000",
            image_url: "https://botte.herokuapp.com/old_is_good.jpg"
        } 
    ]
  };
 
    return res.status(200).json(botPayload);
}
