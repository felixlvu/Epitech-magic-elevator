import { Router } from "express";
import { isUserAuth } from "../services/authService.js";

const protectedRoutes = Router();

protectedRoutes.get("/protected", isUserAuth(), (req, res) => {
  res.send("page protected");
});

export default protectedRoutes;
