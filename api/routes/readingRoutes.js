"use strict";

const express = require("express");
const sanitizer = require("sanitizer");
const router = express.Router();
const Reading = require("../models/Reading");
//Add a new reading
router.post("/new", (req, res) => {
  //Sanitize the input to prevent malicious data
  const reading = { value: sanitizer.sanitize(req.body.value) };
  Reading.create(reading)
    .then(result => {
      res.status(201).json({ mssg: "Created", data: result });
    })
    .catch(err => {
      res.status(500).json({ mssg: "Internal Error" });
    });
});
//Read all readings
router.get("/all", (req, res) => {
  Reading.find({})
    .then(result => {
      res.status(200).json({ mssg: "Ok", data: result });
    })
    .catch(err => {
      res.status(500).json({ mssg: "Internal Error" });
    });
});
//Read particular reading
router.get("/:readId", (req, res) => {
  const readId = sanitizer.sanitize(req.params.readId);
  Reading.findOne({tankId:readId})
    .then(result => {
      res.status(200).json({ mssg: "Ok", data: result });
    })
    .catch(err => {
      res.status(500).json({ mssg: "Internal Error" });
    });
});
//Update particular reading
router.put("/:readId", (req, res) => {
  const readId = sanitizer.sanitize(req.params.readId);
  const value = sanitizer.sanitize(req.body.value);
  Reading.findByIdAndUpdate({tankId:readId}, { $set: { value } }, { new: true })
    .then(result => {
      res.status(200).json({ mssg: "Ok", data: result });
    })
    .catch(err => {
      res.status(500).json({ mssg: "Internal Error" });
    });
});
//Delete particular reading
router.delete("/:readId", (req, res) => {
  const readId = sanitizer.sanitize(req.params.readId);
  Reading.findByIdAndDelete({tankId:readId)
    .then(result => {
      res.status(200).json({ mssg: "Ok", data: result });
    })
    .catch(err => {
      res.status(500).json({ mssg: "Internal Error" });
    });
});
module.exports = router;
