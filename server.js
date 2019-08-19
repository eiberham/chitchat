const app = require('express')();
const models = require('./models');
const expressGraphQL = require('express-graphql');
const mongoose = require('mongoose');
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);
const bodyParser = require('body-parser');
const cors = require('cors');
const schema = require('./schema/schema');

const http = require('http').createServer(app);
const io = require('socket.io')(http);
const port = 5000;

// Replace with your mongoLab URI
const MONGO_URI = 'mongodb+srv://acedeno:sEvNLQ2cSy01Cl9U@cluster-pozxl.mongodb.net/';
if (!MONGO_URI) {
    throw new Error('You must provide a MongoLab URI');
}

// Mongoose's built in promise library is deprecated, replace it with ES2015 Promise
mongoose.Promise = global.Promise;

// Connect to the mongoDB instance and log a message
// on success or failure
mongoose.connect(MONGO_URI, {
    authSource: 'admin',
    retryWrites: true,
    dbName: 'shitchat',
    useCreateIndex: true,
    useNewUrlParser: true,
});

const db = mongoose.connection
    .once('open', () => console.log('Connected to MongoLab instance.'))
    .on('error', error => console.log('Error connecting to MongoLab:', error));

// Configures express to use sessions.  This places an encrypted identifier
// on the users cookie.  When a user makes a request, this middleware examines
// the cookie and modifies the request object to indicate which user made the request
// The cookie itself only contains the id of a session; more data about the session
// is stored inside of MongoDB.
app.use(session({
    resave: true,
    saveUninitialized: true,
    secret: 'aaabbbccc',
    store: new MongoStore({
        mongooseConnection: db,
        autoReconnect: true
    })
}));


app.use(bodyParser.json());
app.use(cors());
// Instruct Express to pass on any request made to the '/graphql' route
// to the GraphQL instance.
app.use('/graphql', expressGraphQL({
    schema,
    graphiql: true
}));

app.get('/', function(req, res){
    res.send('<h1>Chat app</h1>');
});

io.on('connection', (socket) => {
    io.emit('someone has just connected');
    const id = socket.id;
    socket.on('chat message', function(msg){
        console.log('message: ' + msg);
        io.emit('received', {message: msg});
    });
    socket.on('disconnect', function(){
        console.log('user disconnected');
    });
});

http.listen(port, () => {
    console.log(`server running on port ${port}`);
});