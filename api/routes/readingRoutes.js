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


/**
 * @swagger
 * tags:
 *   name: Readings
 *   description: Readings management
 */

/**
 * @swagger
 * path:
 *  /api/reading/new:
 *    post:
 *      summary: Create a new reading
 *      tags: [Readings]
 *      requestBody:
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/readingSchema'
 *              example:
 *                {"value":78}
 *      responses:
 *        "201":
 *          description: A reading schema
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/readingSchema'
 *                example: {"mssg":"Created","data":{"value":"78","tankId":"4edd40c86762e0fb12000003","capacity":1000,"location":{"type":"Point","coordinates":[23.4,78.9]},"name":"AnandhaKris"}}
 *        "500":
 *          description: Internal error message 
 *          content:
 *            application/json:
 *                example: {"mssg":"Internal Error"}
 *                  
 *      
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
  * Get all readings.
  * @returns {Reading} Tank Details
  * @throws {Internal Error} When error occurs.
  */

/**
 * @swagger
 * path:
 *  /api/reading/all:
 *    get:
 *      summary: Read all readings.
 *      tags: [Readings]
 *      requestBody:
 *        required: false
 *      responses:
 *        "200":
 *          description: Tank Details
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/readingSchema'
 *                example: {"mssg": "Ok","data": []}
 *        "500":
 *          description: Internal error message 
 *          content:
 *            application/json:
 *                example: {"mssg":"Internal Error"}
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
  * Get a particular reading.
  * @returns {data} Tank reading
  * @throws {Internal Error} When reading can't be found or error occurs.
  */

/**
 * @swagger
 * path:
 *  /api/reading/{readId}:
 *    get:
 *      summary: Read a particular reading.
 *      tags: [Readings]
 *      requestBody:
 *        required: false
 *      responses:
 *        "200":
 *          description: Tank reading
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/readingSchema'
 *                example: {"mssg":"Ok","data":{"value":"78","tankId":"4edd40c86762e0fb12000003","capacity":1000,"location":{"type":"Point","coordinates":[23.4,78.9]},"name":"AnandhaKris"}}
 *        "500":
 *          description: Internal error message 
 *          content:
 *            application/json:
 *                example: {"mssg":"Internal Error"}
 *                  
 *      
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
 
/**
 * @swagger
 * path:
 *  /api/reading/{readId}:
 *    post:
 *      summary: Update a particular reading
 *      tags: [Readings]
 *      requestBody:
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/readingSchema'
 *              example:
 *                {"value":78}
 *      responses:
 *        "200":
 *          description: Updated reading schema
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/readingSchema'
 *                example: {"mssg":"Ok","data":{"value":"78","tankId":"4edd40c86762e0fb12000003","capacity":1000,"location":{"type":"Point","coordinates":[23.4,78.9]},"name":"AnandhaKris"}}
 *        "500":
 *          description: Internal error message 
 *          content:
 *            application/json:
 *                example: {"mssg":"Internal Error"}
 *                  
 *      
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

/**
 * @swagger
 * path:
 *  /api/reading/{readId}:
 *    delete:
 *      summary: Delete a particular reading
 *      tags: [Readings]
 *      requestBody:
 *        required: false
 *      responses:
 *        "200":
 *          description: Deleted reading schema
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/readingSchema'
 *                example: {"value":"78","tankId":"4edd40c86762e0fb12000003","capacity":1000,"location":{"type":"Point","coordinates":[23.4,78.9]},"name":"AnandhaKris"}
 *        "500":
 *          description: Internal error message 
 *          content:
 *            application/json:
 *                example: {"mssg":"Internal Error"}
 *                  
 *      
 */
router.delete("/:readId", (req, res) => {
  const readId = sanitizer.sanitize(req.params.readId);
  Reading.findByIdAndDelete({tankId:readId})
    .then(result => {
      res.status(200).json({ mssg: "Ok", data: result });
    })
    .catch(err => {
      res.status(500).json({ mssg: "Internal Error" });
    });
});
module.exports = router;


