'use strict';

var http = require('http');

var uri = process.argv[2];

if (uri) {
    http.get(uri, function(response) {
        var collected = '';
        
        response.setEncoding('utf8');
        
        response.on('data', function(data) {
            collected += data;
        });
        
        response.on('error', function(data) {
            console.error(data);
        });
        
        response.on('end', function(data) {
            console.log(collected.length);
            console.log(collected);
        });
    });
}