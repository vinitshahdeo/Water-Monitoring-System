"use strict";

const express = require("express"),
  mongoose = require("mongoose"),
  bodyParser = require("body-parser"),
  cors = require("cors"),
  helmet = require("helmet"),
  morgan = require("morgan"),
  config = require("config"),
  app = express(),
  port = process.env.PORT || 8080;

//Use the database uri from the ./config directory
const dbURI = config.dbURI;
mongoose
  .connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(res => {
    console.log("Database connected successfully.");
  })
  .catch(err => {
    throw err;
  });

//Configuring the express instance
// Prevent misconfig headers
app.disable("x-powered-by");

// Prevent opening page in frame or iframe to protect from clickjacking
app.use(helmet.frameguard());

// Prevents browser from caching and storing page
app.use(helmet.noCache());

// use bodyParser to parse application/json content-type
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// enable all CORS requests
app.use(cors());

//If executing in test environment then prevent logging
if (config.util.getEnv("NODE_ENV") !== "test") {
  // log HTTP requests
  app.use(morgan("combined"));
}

//Requiring Routes
const readingRoutes = require("./routes/readingRoutes"),
  phoneAuth = require("./auth/phoneAuth")

//Using Routes
app.use("/api/reading", readingRoutes);

//Using phone auth routes
app.use("/auth", phoneAuth);

//Starting the server
app.listen(port, err => {
  if (err) throw err;
  console.log(`Server running at port ${port}`);
});

module.exports = app; // for testing
