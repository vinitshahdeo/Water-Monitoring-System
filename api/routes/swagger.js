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
          "A test project to understand how easy it is to document and Express API",
        license: {
          name: "MIT",
          url: "https://choosealicense.com/licenses/mit/"
        },
        contact: {
          name: "Swagger",
          url: "https://swagger.io",
          email: "Info@SmartBear.com"
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