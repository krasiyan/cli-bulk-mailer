// External dependencies
var nodemailer = require("nodemailer")
var smtpPool = require("nodemailer-smtp-pool")
var _ = require("underscore")
var commander = require("commander")
var uuid = require("node-uuid")

// Internal dependencies
var config = require("./config.json")

commander
  .option("-u, --user [string]", "Google sender email")
  .option("-p, --password [string]", "Google sender password")
  .option("-t, --to [string]", "Receiver email")
  .option("-e, --emailsToSend [number]", "Amount of emails to send")
  .parse(process.argv)

var options = _.defaults({
  user: commander.user,
  password: commander.password,
  to: commander.to,
  emailsToSend: commander.emailsToSend
}, config)

var transport = nodemailer.createTransport(smtpPool({
  host: "smtp.googlemail.com",
  port: 465,
  authMethod: "PLAIN",
  secure: true,
  auth: {
    user: options.user,
    pass: options.password
  },
  maxConnections: 10,
  rateLimit: 10
}))

var messageData = {
  from: options.user,
  to: options.to,
  subject: uuid.v4(),
  text: "test email"
}

for (var i = 1; i <= options.emailsToSend; i++) {
  transport.sendMail(
    _.extend({}, messageData, { subject: messageData.subject + " " + i }),
    function(err, info){
      if (err) {
        return console.log(err);
      }
      console.log('Message sent: ' + info.response);
  })
}

// transport.close()