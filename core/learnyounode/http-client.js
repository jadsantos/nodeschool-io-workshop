'use strict';

var http = require('http');

var uri = process.argv[2];

if (uri) {
    http.get(uri, function(response) {
        response.setEncoding('utf8');
        response.on('data', function(data) {
            console.log(data);
        });
        response.on('error', function(data) {
            console.error(data);
        });
    });
}