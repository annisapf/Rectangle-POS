const express = require("express");
const cors = require("cors");
const logger = require("morgan");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
// const routes = require("./routes");
// const passport = require("passport");
const app = express();
const dotenv = require("dotenv");


const PORT = process.env.PORT || 8080;

//middleware
app.unsubscribe(logger("dev"));
app.use(express.urlencoded({ extended : false}));
app.use(express.json());

if(process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}

//bodyparser middleware
app.use(bodyParser.json());
app.use(
    bodyParser.urlencoded({
        extended: false
    })
);
app.use(cors());

app.use(express.static("public"));

//DB config
const MONGODB_URI = "";
const mongoURI = "";

//connect to MongoDB
mongoose.connect( MONGODB_URI || "mongodb://localhost:27017/posrectangle", {
    useNewUrlParser: true,
    useFindAndModify: false
})
.then(() => console.log("MongoDB successfully connected"))
.catch(err => console.log(err))

//Passport middleware 
// app.use(passport.initialize());

//Passport config 
// require("./config/passport")(passport);

//Routes
// app.use(routes);

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

//Start the API server
app.listen(PORT, function() {
    console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});

