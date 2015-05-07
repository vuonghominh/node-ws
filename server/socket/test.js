var WebSocketServer = require("ws").Server;

module.exports = function(server, config){
	var wss = new WebSocketServer({server: server});
	console.log("websocket server created!");

	wss.on("connection", function(ws) {
	  var id = setInterval(function() {
	    ws.send(JSON.stringify(new Date()), function() {  })
	  }, 1000)

	  console.log("websocket connection open")

	  ws.on("close", function() {
	    console.log("websocket connection close")
	    clearInterval(id)
	  })
	})
}