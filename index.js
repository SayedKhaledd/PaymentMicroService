
//const app = require('./app/app')
const express = require("express");
const bodyParser = require("body-parser");

const cors = require("cors");
const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});
app.get('/', (req, res) => {
    res.send('hello world')
})
app.listen(process.env.PORT||3000, () => console.log("server"))
