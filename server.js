const app = require('express')();
const http = require('http').createServer(app);
const io = require('socket.io')(http);
const port = 5000;

app.get('/', function(req, res){
    res.send('<h1>Chat app</h1>');
});

io.on('connection', (socket) => {
    console.log('someone has just connected');
});

http.listen(port, () => {
    console.log(`server running on port ${port}`);
});