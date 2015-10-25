'use strict';

var filt = require('./filtered-ls-mod');

filt(process.argv[2], process.argv[3], function(err, data) {
    if (err) {
        console.log(err);
    }
    else {
        data.forEach(function(item) {
            console.log(item);
        })
    }
});