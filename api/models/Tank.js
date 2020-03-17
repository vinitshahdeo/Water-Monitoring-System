"use strict";

const mongoose= require("mongoose");

const tankSchema= new mongoose.Schema({
	value: {
		capacity: Number,
		location: String,
		name: String
	}
});

module.exports=mongoose.model("tank",tankSchema);