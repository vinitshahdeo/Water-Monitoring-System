"use strict";
const mongoose= require("mongoose");
//todo-GeoJSON for location
//tank schema

const tankSchema= new mongoose.Schema({
	value: {
		capacity: {
			type: Number,
			required:true
		},
		location: {
			type: String,
			required:true
		} ,
		name: {
			type: String,
			required:true
		} 
	}
});

module.exports=mongoose.model("tank",tankSchema);