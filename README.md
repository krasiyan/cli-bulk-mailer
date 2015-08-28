# cli-bulk-mailer
### A simple and intuitive CLI nodejs bulk mailer based on Gmail

## Getting started
  * Clone this repository
  * Ensure you are running a recent version of Node (>= 0.10.32)
  * Install all node modules via `npm install`
  * Clone `config.json.sample` into `config.json` and if needed change the default parameters
  * Invoke `index.js` with the required arguments. I.e. `node index.js -u test@gmail.com -p test -t other@gmail.com -e 10`.
  * The list of all possible arguments can seen via `node index.js -h`
  * The script sends the requested amount of emails as fast as possible with a subject of `{UUID} - {Message index}`

## Notes
  * In case Gmail returns login errors, [allowing less secure apps](https://support.google.com/accounts/answer/6010255?hl=en) may be needed on the problematic account
  * Gmail has rather low SMTP limits :warning:
  * Never abuse :exclamation:

# Thanks to:
## [Nodemailer by andris9](https://github.com/andris9/Nodemailer)
## [Commander by tj](https://github.com/tj/commander.js)
