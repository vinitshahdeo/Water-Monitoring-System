"use strict";
const express = require("express");
const router = express.Router();
const Tank = require("../models/tank");

/**
 * Adds a new tank according to specifications.
 * @param {Number} capacity-tank capacity
 * @param {String} name-tank name
 * @param {String} location-tank location
 * @returns {Object} Tank object 
 * @throws {NotFoundError} When tank is not created.
 */
router.post("/add", function (req, res) {
	var name = req.body.name,
		location = req.body.location,
		capacity = req.body.capacity;

	Tank.create({
		capacity: capacity,
		name: name,
		location: location
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