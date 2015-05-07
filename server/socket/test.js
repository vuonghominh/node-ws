
module.exports = function(io){
	io.on('connection', function(socket){
	  console.log('a user connected');

	  socket.on('challenge-game', function(info){
	  	if(info.room && info.user){
	  		socket.username = info.user;
	  		socket.room = info.room;
	  		socket.join(info.room);
	  		console.log("%s accepted challenge, room: %s", info.user, info.room);
	  	}
	  });

	  socket.on('update-status-server', function(status){
	  	if(status.room && status.data){
	  		console.log(status.room + "-" + status.data);
	  		socket.broadcast.to(status.room).emit('update-status-client', {data: status.data});
	  	}
	  });

	  socket.on('disconnect', function(){
	  	if(socket.room){
	  		console.log('user %s disconnected, room: %s', socket.username, socket.room);
	    	socket.leave(socket.room);
	  	}else{
	  		console.log('user disconnected');
	  	}
	  });
	});
}