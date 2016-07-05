var TwitterAPI = require('node-twitter-api');

var consumerKey = 'OOptduJUSJTfrw7QlFivYWgOo';
var consumerSecret = 'n6CM6TlnD3MkdKSqkfGS0AtKK057Lql0f5to2NKui0HD5g4vdZ';

var accessToken = '748877330840363009-cIoQfELMKvF5lFvVCMfxXgJ04FZHGjI';
var accessSecret = 'EbnJJ73RRC7Rt2GBBvbnOYcdqV6tbAiMsZRSeafSSuOVI';

var Twitter = new TwitterAPI({
    consumerKey: consumerKey,
    consumerSecret: consumerSecret
});

// Callback is a function of the form: function(error, mentions)
module.exports.run = function (callback) {
    var mentions = [];

    Twitter.search({
        q: 'hyperledger OR ibm-blockchain',
        count: 100
    }, accessToken, accessSecret, function (err, data, response) {
        if (err) {
            console.log('Twitter API ERROR: ' + err);
            if (callback) callback(err, null);
        }

        for (var i in data.statuses) {
            //console.log(data.statuses[i].text);
            mentions.push(data.statuses[i].text);
        }

        if (callback) callback(null, mentions);
    });
}

exports.run(function (err, mentions) {
    if (err) console.log('ERROR: ' + err);

    for (var i in mentions) console.log(mentions[i] + '\n');
});
