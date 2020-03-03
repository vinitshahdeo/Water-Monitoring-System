'use strict'

const mongoose = require("mongoose");

const readingSchema = new mongoose.Schema({
  value: {
    required: true,
    type: String
  }
});

module.exports = mongoose.model("reading", readingSchema);
