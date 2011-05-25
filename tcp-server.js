var net = require('net')

var server = net.createServer(function(socket) {    	
    socket.write('Welcome to the cloud');        
});

server.listen(process.env.C9_PORT);
