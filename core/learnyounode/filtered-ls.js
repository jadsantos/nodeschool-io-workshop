'use strict';

var fs = require('fs'),
    path = require('path');
    
var dirArg = process.argv[2],
    extFilter = process.argv[3];
    
if (dirArg && extFilter) {
    fs.readdir(dirArg, function(err, list) {
        if (err) {
            console.log(err);
        }
        else {
            var extFilterTest = '.' + extFilter;
            
            for (var i = 0; i < list.length; i++) {
                var ext = path.extname(list[i]);
                
                if (ext === extFilterTest) {
                    console.log(list[i]);
                }
            }
        }
    });
}

