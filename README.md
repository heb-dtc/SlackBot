Simple SlackBot
===========

This bot is a Node.js app built using Express4 (http://expressjs.com/).

You will need npm to build it:

`yum install npm`

Then fetch the dependencies using:

`npm install`

To run it locally you can run:

`node app`

## Slack Webhooks

Slack offers different types of hooks:
* incoming webhook
* outgoing webhook
* slash command

All hooks should be configured in the Slack dashboard in the configure integration page.

### Outgoing Webhooks

Outgoing Webhook are the easiest to deal with. They basically listen to chat for trigger words.
They talk to your app via a POST request. Simply register an endpoint in the app.js file:

` app.post("/myendpoint", myEndPoint); ` 

where ` myEndPoint` is the method called when the hook is triggered.

The reply is a JSON and should be properly formatted for Slack to understand it.

Check https://api.slack.com/outgoing-webhooks for moar details.

### Incoming Webhooks & Slash commands
Slash command can only respond to user in private. They need to be combined with Incoming webhook 
in order to be able to send messages to channels.
When triggered by a predefined slash command, the bot that will be posting to the Incoming Webhook URL.
Register an endpoint in the app.js file:

` app.post("/myendpoint", myEndPoint); ` 

 where ` myEndPoint` is the method called when the hook is triggered.
 
The bot should send a JSON string in a POST request.

Check https://api.slack.com/incoming-webhooks for even moar details

 
