const express = require("express");
const cors = require('cors');
const logger = require("morgan");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const routes = require("./routes");
const passport = require("passport");
const app = express();
const dotenv = require("dotenv");
const path = require('path');
const multer = require('multer');
const productController = require("./controllers/productController");

//const upload = multer({ dest: 'uploads/' })
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'upload')
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname )
  }
})

var upload = multer({ storage: storage })
console.log(upload);

console.log("-------------------------------------------------")

dotenv.config();

const PORT = process.env.PORT || 5001;

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
console.log("-------------------------------------------------")
//app.use(upload.array());
app.use(
  bodyParser.urlencoded({
      extended: false
  })
);
app.use(cors());

app.post('/api/product/add', upload.single('image'), 
    function (req, res, next) {
        console.log(req.file);
        console.log(req.body);
        productController.create(req, res);
 
  })
  

app.use(express.static("public"));
app.use("/upload",express.static("upload"));
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

// Passport middleware
app.use(passport.initialize());

// Passport config
require("./config/passport")(passport);

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
