"use strict";

const mongoose = require("mongoose");

/**
 * @swagger
 *  components:
 *    schemas:
 *      pointSchema:
 *        type: object
 *        required:
 *          - type
 *          - coordinates
 *        properties:
 *          type:
 *            type: string
 *            enum: ['Point']
 *          coordinates:
 *            type: array
 *            items: 
 *              type: number
 *        example:
 *           type: Point
 *           coordinates: [87.9,10.8]
 */

const pointSchema = new mongoose.Schema({
  type: {
    type: String,
    enum: ['Point'],
    required: true
  },
  coordinates: {
    type: [Number],
    required: true
  }
});

/**
 * @swagger
 *  components:
 *    schemas:
 *      readingSchema:
 *        type: object
 *        required:
 *          - value
 *          - tankId
 *          - capacity
 *          - location
 *          - name
 *        properties:
 *          value:
 *            type: string
 *            enum: ['Point']
 *          tankId:
 *            type: ObjectId
 *          capacity:
 *            type: number
 *          location:
 *            $ref: '#/components/schemas/pointSchema'
 *          name:
 *            type: string
 *        example:
 *           value: "78"
 *           tankId: "4edd40c86762e0fb12000003"
 *           capacity: 1000
 *           location: 
 *            type: "Point"
 *            coordinates: [23.09,89.7]
 *           name: "AnandhaKris"   
 */

const readingSchema = new mongoose.Schema({
  value: {
    required: true,
    type: String
  },
  tankId: {
    required: true,
    type: mongoose.Types.ObjectId,
	auto:true
  },
  capacity: {
    required: true,
    type: Number
  },
  location: {
    type: pointSchema,
    required: true
  },
  name: {
    required: true,
    type: String
  }
});

module.exports = mongoose.model("reading", readingSchema);