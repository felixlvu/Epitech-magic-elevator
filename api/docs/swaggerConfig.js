import swaggerJSDoc from "swagger-jsdoc";
const port = process.env.PORT || 3000;

const swaggerDefinition = {
  openapi: "3.1.0",
  info: {
    title: "Express API",
    version: "1.0.0",
    description: "Utilisation de l'API",
  },
  servers: [
    {
      url: `http://localhost:${port}`,
      description: "Serveur de développement",
    },
  ],
};

const options = {
  swaggerDefinition,
  // Chemins vers les fichiers contenant des annotations Swagger
  apis: ["./docs/routes/**/*.yaml"],
};

const swaggerSpec = swaggerJSDoc(options);

export default swaggerSpec;
