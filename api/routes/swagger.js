const swaggerJsDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");
const express = require("express");
const router = express.Router();



const swaggerOptions = {
    swaggerDefinition: {
      openapi: "3.0.0",
      info: {
        title: "Water Monitoring System",
        version: "1.0.0",
        description:
          "Water Monitoring System is an IOT based Liquid Level Monitoring system that has mechanisms to keep the user alerted in case of liquid overflow or when tank depletes. The water tanks can be fixed with ultrasonic sensors that is placed over the container. Ultrasonic sensor is used to measure, compare container depth and liquid level.",
        license: {
          name: "MIT",
          url: "https://choosealicense.com/licenses/mit/"
        },
        contact: {
          name: "Vinit Shahdeo",
          url: "https://github.com/vinitshahdeo",
        }
      },
      servers: [
        {
          url: "http://localhost:8080"
        }
      ]
    },
    apis: ["./routes/*.js","./models/*.js"]
  };

const swaggerDocs = swaggerJsDoc(swaggerOptions);

router.use("/api-docs", swaggerUi.serve);
router.get("/api-docs", swaggerUi.setup(swaggerDocs));

module.exports = router