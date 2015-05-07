var env     = process.env.NODE_ENV = process.env.NODE_ENV || 'production';
var config  = require('./server/config/config')[env];
var app  = require('express')();
var http = require('http').Server(app);
var io   = require('socket.io')(http);

require('./server/socket/test')(io);

http.listen(config.port, function(){
  console.log("http server listening on %d", config.port);
});