"use strict";

const mongoose = require("mongoose");

const pointSchema = new mongoose.Schema({
  type: {
    type: String,
    enum: ['Point'],
    required: true
  },
  coordinates: {
    type: [Number],
    required: true
  }
});


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
    type: pointSchema,
    required: true
  },
  tankName: {
    required: true,
    type: String
  }
});

module.exports = mongoose.model("reading", readingSchema);