
module.exports = function(io){
	io.on('connection', function(socket){
	  console.log('a user connected');

	  socket.on('chat message', function(msg){
	    console.log('message: ' + msg);
	    if(msg == 'fuck') io.emit('chat message', 'cam noi bay');
	  });

	  socket.on('disconnect', function(){
	    console.log('user disconnected');
	  });
	});
}