# twitter_hyperledger
twitter api that checks for latest tweets about "hyperledger" or "ibm-blockchain"

to run call exports.run(cb) with cb of the form: function(error, mentions) where mentions is an array of strings of tweets

currently uses consumer key/secret and access token/secret from twitter application under ecoeyta@us.ibm.com, to use with own application change information at top of twitter_bot.js
