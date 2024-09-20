import { Router } from 'express';
const router = Router();

// Import des routes
import authRoutes from './routes/authRoute.js';
import protectedRoutes from './routes/protectedRoute.js';
import elevateRoutes from './routes/elevateRoute.js'

// Chargement des routes de l'API
router.use([
  authRoutes,
  elevateRoutes,
  protectedRoutes
]);

export default router;
