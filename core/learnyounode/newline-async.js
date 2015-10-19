'use strict';

var fs = require('fs');

var newlines = 0;

fs.readFile(process.argv[2], function(err, fileBuf) {
    if (err) {
        console.log(err);
    }
    else {
        for (var i = 0; i < fileBuf.length; i++) {
            if (String.fromCharCode(fileBuf[i]) === '\n') {
                newlines++;
            }
        }
        
        console.log(newlines);
    }
});

