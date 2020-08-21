"use strict";
const express = require("express");
const router = express.Router();
const Tank = require("../models/Reading");

/**
 * Adds a new tank according to specifications.
 * @param {Number} capacity-tank capacity
 * @param {String} name-tank name
 * @param {Object} location-tank location
 * @returns {Object} Tank object 
 * @throws {NotFoundError} When tank is not created.
 */

/**
 * @swagger
 * tags:
 *   name: Tanks
 *   description: Tank management
 */

router.post("/add", function (req, res) {
	var name = req.body.tankName,
		location = req.body.tankLocation,
		capacity = req.body.tankCapacity;

	Tank.create({
		tankCapacity: capacity,
		tankName: name,
		tankLocation: location
	}, function (err, tank) {
		if (err) {
			res.json({
				status: "500",
				message: "Internal Server Error!"
			});
		}
		else {
			res.json({
				status: "200",
				message: "",
				data: tank
			});
		}
	});
});

module.exports = router;