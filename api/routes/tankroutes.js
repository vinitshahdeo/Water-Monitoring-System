"use strict";

const express=require("express");
const router =express.Router();
const Tank=require("../models/tank");

//requires name location and capacity of tank to be submitted in req
router.post("/new",(req,res)=>{ //new tank
	var name = req.body.name,
		location=req.body.location,
		capacity=req.body.capacity;
	
	Tank.create({
		capacity: capacity,
		name:name,
		location:location
	}, function(err,tank){
		if(err){ res.json({mssg:"Internal Error!"})};//error message if error occurs
		else {
			res.json({mssg:"Created!", data:tank});//returns tank object if successfully created
		}
	});
});

module.exports=router;