"use strict";

const mongoose = require("mongoose");

const readingSchema = new mongoose.Schema({
  value: {
    required: true,
    type: String
  },
  capacity:{
    required:true,
    type: Number
  },
  location:{
    required:true,
    type:String
  },
  name:{
    required:true,
    type:String
  },
  tankId:{
    required:false,
    type:Number
  }
});

module.exports = mongoose.model("reading", readingSchema);
