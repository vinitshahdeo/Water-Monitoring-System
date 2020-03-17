"use strict";

const express=require("express");
const router =express.Router();
const Tank=require("../models/tank");

router.post("/new",(req,res)=>{
	var name = req.body.name,
		location=req.body.location,
		capacity=req.body.capacity;
	
	Tank.create({
		capacity: capacity,
		name:name,
		location:location
	}, function(err,tank){
		if(err){ res.json({mssg:"Internal Error!", data:tank})};
		else {
			res.json({mssg:"Created!"});
		}
	});
});

module.exports=router;