import { Router } from 'express';

const elevateRoutes = Router();

elevateRoutes.post('/elevate', (req, res) => {
  console.log("catch elevate");
  res.status(200).send("elevate wala");
});

export default elevateRoutes;