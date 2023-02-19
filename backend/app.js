const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const dotenv = require("dotenv");
const dataRoutes = require("./routes/dataroutes");
dotenv.config();

const mongoose = require("mongoose");

const app = express();

app.use(cors());

app.use(bodyParser.json({ extended: false }));

app.use(dataRoutes);

mongoose
  .connect(process.env.URL)
  .then(() => {
    app.listen(5000);
  })
  .then(() => {
    console.log("Server Started At Port 5000");
  })
  .catch((err) => console.log(err));
