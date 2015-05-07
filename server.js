var express = require("express");
var app     = express();
app.use(express.static(__dirname + "/"));

var env    = process.env.NODE_ENV = process.env.NODE_ENV || 'production';
var config = require('./server/config/config')[env];

var http   = require("http");
var server = http.createServer(app)
server.listen(config.port)
console.log("http server listening on %d", config.port)

require('./server/socket/test')(server, config);