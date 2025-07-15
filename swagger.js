const swaggerJSDoc = require("swagger-jsdoc");

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "TODO App API",
      version: "1.0.0",
      description: "API documentation for TODO application",
    },
    servers: [{ url: "http://localhost:3000" }],
    components: {
      securitySchemes: {
        bearerAuth: {
          type: "apiKey",
          in: "header",
          name: "token",
        },
      },
    },
  },
  apis: ["./index.js"],
};


const swaggerSpec = swaggerJSDoc(options);
module.exports = swaggerSpec;
