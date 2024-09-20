import express from "express";
import dotenv from "dotenv";
import morgan from "morgan";
import cors from "cors";
import router from "./src/router.js";

globalThis.fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));
dotenv.config();

const app = express();

const port = process.env.PORT || 3000;

// Parsing du body en JSON
app.use(express.json());

app.use(express.urlencoded({ extended: false }));
app.use(morgan("dev"));
app.use(cors());

// Intégration de swagger
import swaggerUi from "swagger-ui-express";
import swaggerSpec from "./docs/swaggerConfig.js";

// Route Swagger UI
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Pour toutes les routes nous renvoyons au router
app.use("/", router);

// Création du serveur HTTP
app.listen(port, () => {
  console.log(`Serveur lancé sur le port ${port}`);
});
