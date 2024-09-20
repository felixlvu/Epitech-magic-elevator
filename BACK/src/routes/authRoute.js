import { Router } from 'express';
import { loginUser } from '../services/authService.js';

const authRoutes = Router();

authRoutes.get('/auth', (req, res) => {
  console.log('lecture process.env.JWT_SECRET', process.env.JWT_SECRET);
  res.send("api d'authentification");
});

authRoutes.post('/auth', (req, res) => {
  console.log('lecture process.env.JWT_SECRET', process.env.JWT_SECRET);
  res.send("api d'authentification");
});

authRoutes.post('/login', loginUser);

export default authRoutes;