'use strict';

var http = require('http');

var getUrl = function(url, cb) {
    http.get(url, function(response) {
        response.setEncoding('utf8');
        
        var dataSoFar = '';
        
        response.on('data', function(data) {
            dataSoFar += data;
        })

        response.on('end', function() {
            cb(dataSoFar);
        });
    });    
};

var printResults = function(complete, output) {
    var isComplete = true;
    
    complete.forEach(function(item) {
        isComplete = isComplete && item;    
    });

    if (isComplete) {
        output.forEach(function(item) {
            console.log(item);    
        });
    }
};

if (process.argv.length >= 5) {
    var urls = [process.argv[2], process.argv[3],  process.argv[4]];
    
    var complete = [],
        output = [];
            
    urls.forEach(function(url, index) {
        complete[index] = false;
    });
    
    urls.forEach(function(url, index) {
        getUrl(url, function(data) {
            complete[index] = true;
            output[index] = data;
            printResults(complete, output);
        });
    });
} 