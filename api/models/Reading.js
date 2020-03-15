"use strict";

const mongoose = require("mongoose");

const readingSchema = new mongoose.Schema({
  value: {
    required: true,
    type: String
  },
  tankId: {
    required: true,
    type: mongoose.Types.ObjectId
  },
  tankCapacity: {
    required: true,
    type: Number
  },
  tankLocation: {
    required: true,
    type: String
  },
  tankName: {
    required: true,
    type: String
  }
});

module.exports = mongoose.model("reading", readingSchema);
