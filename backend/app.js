//importing all the required packages
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
//initializing dotenv
const dotenv = require("dotenv");
dotenv.config();
//importing data Routes from the routes folder
const dataRoutes = require("./routes/dataroutes");
//importing mongoose for database connection
const mongoose = require("mongoose");
//initializing express
const app = express();
//initializing cors and body parser
app.use(cors());

app.use(bodyParser.json({ extended: false }));
//using the data routes
app.use(dataRoutes);
//setting up the connection with database and initializing express on port 5000
mongoose
  .connect(process.env.URL)
  .then(() => {
    app.listen(5000);
  })
  .then(() => {
    console.log("Server Started At Port 5000");
  })
  .catch((err) => console.log(err));
