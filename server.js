/*jslint node: true, unparam: true */
/*global exec */

'use strict';

var http = require('http'),
    https = require('https'),
    fs = require('fs'),
    express = require('express'),
    app = express(),
    options = {};

app.configure(function () {
    app.use('/bower_components', express['static']('bower_components'));
    app.use('/js', express['static']('js'));
    app.use('/jsmin', express['static']('jsmin'));
    app.use(app.router);
});


https.createServer(options, app).listen(443);
http.createServer(app).listen(80);

