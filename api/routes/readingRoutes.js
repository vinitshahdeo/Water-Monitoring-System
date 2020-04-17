"use strict";

const express = require("express");
const sanitizer = require("sanitizer");
const router = express.Router();
const Reading = require("../models/Reading");
/**
  * Add a new reading.
  * @returns {data} New tank reading
  * @throws {Internal Error} When reading can't be added or error occurs.
  */
router.post("/new", (req, res) => {
  /**
   *Sanitize the input to prevent malicious data
   */
  const reading = { value: sanitizer.sanitize(req.body.value) };
  Reading.create(reading)
    .then(result => {
      res.status(201).json({ mssg: "Created", data: result });
    })
    .catch(err => {
      res.status(500).json({ mssg: "Internal Error" });
    });
});
 /**
  * Read all readings.
  * @returns {Reading} Tank Details
  * @throws {Internal Error} When error occurs.
  */
router.get("/all", (req, res) => {
  Reading.find({})
    .then(result => {
      res.status(200).json({ mssg: "Ok", data: result });
    })
    .catch(err => {
      res.status(500).json({ mssg: "Internal Error" });
    });
});

/**
  * Read a particular reading.
  * @returns {data} Tank reading
  * @throws {Internal Error} When reading can't be found or error occurs.
  */
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
/**
  * Update a particular reading.
  * @returns {data} Updated Tank reading
  * @throws {Internal Error} When reading can't be updated or error occurs.
  */
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
/**
  * Delete a particular reading.
  * @returns {data} Deleted Tank reading
  * @throws {Internal Error} When reading can't be deleted or error occurs.
  */
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