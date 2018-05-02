const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");
// const session = require("express-session")
const mongoose = require("mongoose");
const dbConnection = require('./models')
const app = express();
const PORT = process.env.PORT || 3001;
const routes = require("./routes");
const user = require('./routes/user')
// const session = require('express-session')
// const MongoStore = require('connect-mongo')(session)
// const passport = require('./passport');
// const MONGODB_URI = "./config/mongo_uri"

// Sessions
// app.use(
//   session({
//     secret: 'fraggle-rock', //pick a random string to make the hash that is generated secure
//     // store: new MongoStore({ mongooseConnection: dbConnection }),
//     resave: false, //required
//     saveUninitialized: false //required
//   })
// )
// Passport
// app.use(passport.initialize())
// app.use(passport.session()) // calls the deserializeUser


// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/flightbuddydb");

// MIDDLEWARE
app.use(morgan('dev'))
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// app.use(express.static("client/build")); //need both, go to routes and uncomment

var dbm = mongoose.connection;
dbm.on("error", function (error) {
  console.log("Mongoose Error: ", error);
});
dbm.once("open", function () {
  console.log("Mongoose connection successful.");
});

app.use("/", routes);
app.use('/user', user)

// app.use(function(req, res, next) {
//   console.log("things again")
//   console.log("What is our path server.js", req.url)
//   next();
// });

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
