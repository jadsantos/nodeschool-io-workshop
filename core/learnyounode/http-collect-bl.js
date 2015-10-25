'use strict';

var http = require('http'),
    bl = require('bl');

var uri = process.argv[2];

if (uri) {
    http.get(uri, function(response) {
        response.setEncoding('utf8');
        response.pipe(bl(function(err, data) {
            console.log(data.length);
            console.log(data.toString());
        }));
    });
}