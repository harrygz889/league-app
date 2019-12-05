let express = require('express');
let socketio = require('socket.io');
let http = require('http');

let app = express();
let server = http.createServer(app);

app.set('port', (process.env.PORT || 4200));
app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res) {
  res.sendFile('index.html');
});

server.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
