'use strict';

var fs = require('fs');

var fileBuf = fs.readFileSync(process.argv[2]),
    newlines = 0;

for (var i = 0; i < fileBuf.length; i++) {
    if (String.fromCharCode(fileBuf[i]) === '\n') {
        newlines++;
    }
}

console.log(newlines);