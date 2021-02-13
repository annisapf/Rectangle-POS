const express = require("express");
const cors = require('cors');
const logger = require("morgan");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const routes = require("./routes");
const app = express();
const dotenv = require("dotenv");

dotenv.config();

const PORT = process.env.PORT || 5002;

// Define middleware here
app.use(logger("dev"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}

// Bodyparser middleware
app.use(bodyParser.json());
app.use(cors());
app.use(
    bodyParser.urlencoded({
        extended: false
    })
);

app.use(express.static("public"));
// DB Config
const PWD=process.env.DB_PWD;
const MONGODB_URI = `mongodb+srv://annisa:${encodeURIComponent(PWD)}@cluster0.l77tg.mongodb.net/posrectangle`

// Connect to MongoDB
mongoose.connect( MONGODB_URI|| "mongodb://localhost:27017/posrectangle", {
  useNewUrlParser: true,
  useFindAndModify: false
})
.then(() => console.log("MongoDB successfully connected"))
.catch(err => console.log(err));

// Routes
app.use(routes);

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});


// Start the API server
app.listen(PORT, function () {
    console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
