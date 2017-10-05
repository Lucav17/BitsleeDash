const express = require("express"),
    bodyParser = require('body-parser'),
    morgan = require("morgan"),
    router = require("./router"),
    app = express();


app.use(morgan('dev')); // Log requests to API using morgan

// Enable CORS from client-side
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization, Access-Control-Allow-Credentials");
    res.header("Access-Control-Allow-Credentials", "true");
    next();
});

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

router(app);
// test route
app.get('/', function(req, res) {
    res.json({ message: 'welcome to our dockerdashboard module apis' });
});

app.listen(8080, function(err) {
    if (err) throw err;
    console.log("server is now running");
});