module.exports = function (Wanderluster) {
    Wanderluster.logout = function (email, password) {
        var https = require('https');

        var data = JSON.stringify({
            api_key: '3a59f105',
            api_secret: '1acf9767325fcc81',
            to: '+6596467666',
            from: '+6592304127',
            text: 'See you ! The Wanderlust community hope to see you soon ! :)'
        });

        var options = {
            host: 'rest.nexmo.com',
            path: '/sms/json',
            port: 443,
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Content-Length': Buffer.byteLength(data)
            }
        };

        var req = https.request(options);

        req.write(data);
        req.end();

        var responseData = '';
        req.on('response', function (res) {
            res.on('data', function (chunk) {
                responseData += chunk;
            });

            res.on('end', function () {
                console.log(JSON.parse(responseData));
            });
        });
        var decodedResponse = JSON.parse(responseData);

        console.log('You sent ' + decodedResponse['message-count'] + ' messages.\n');

        decodedResponse['messages'].forEach(function (message) {
            if (message['status'] === "0") {
                console.log('Success ' + decodedResponse['message-id']);
               
            }
            else {
                console.log('Error ' + decodedResponse['status'] + ' ' + decodedResponse['error-text']);
            }
        });
    };
};
