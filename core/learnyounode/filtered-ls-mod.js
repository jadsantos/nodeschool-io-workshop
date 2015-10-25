'use strict';

var fs = require('fs'),
    path = require('path');

var filteredLs = function(dir, ext, callback) {
    if (dir && ext) {
        fs.readdir(dir, function(err, list) {
            if (err) {
                callback(err, null);
            }
            else {
                var extFilterTest = '.' + ext,
                    result = [];

                for (var i = 0; i < list.length; i++) {
                    var extFile = path.extname(list[i]);
                    
                    if (extFile === extFilterTest) {
                        result.push(list[i]);
                    }
                }
                
                callback(null, result);
            }
        });
    }
};

module.exports = filteredLs;