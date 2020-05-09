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
    type: mongoose.Types.ObjectId,
	auto:true
  },
  capacity: {
    required: true,
    type: Number
  },
  location: {
    type: pointSchema,
    required: true
  },
  name: {
    required: true,
    type: String
  }
});

module.exports = mongoose.model("reading", readingSchema);