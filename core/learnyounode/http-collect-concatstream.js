'use strict';

var http = require('http'),
    concatStream = require('concat-stream');

var uri = process.argv[2];

if (uri) {
    http.get(uri, function(response) {
        response.setEncoding('utf8');
        response.pipe(concatStream(function(data) {
            console.log(data.length);
            console.log(data);
        }));
    });
}