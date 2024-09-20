import jwt from 'jsonwebtoken';
import pool from './db.js';

export const loginUser = async (req, res) => {
  const { username, password } = req.body;

  console.log("username", username);
  console.log("password", password);
  try {
    const [rows] = await pool.query('SELECT * FROM users WHERE username = ? AND password = ?', [username, password]);

    if (rows.length > 0) {
      const user = rows[0];
      const token = jwt.sign({ id: user.id, username: user.username }, process.env.JWT_SECRET, { expiresIn: '1h' });
      return res.json({ token });
    } else {
      return res.status(401).json({ message: 'Nom d\'utilisateur ou mot de passe incorrect' });
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Erreur serveur' });
  }
};

export const isUserAuth = () => {
  return (req, res, next) => {
    const token = req.headers.authorization;

    if (!token) {
      return res.status(401).json({ message: 'Token manquant' });
    }

    jwt.verify(token, process.env.JWT_SECRET, (err, decodedToken) => {
      if (err) {
        return res.status(498).json({ message: 'Token invalide' });
      } else {
        req.decoded = decodedToken;
        return next();
      }
    });
  };
};

export default { loginUser, isUserAuth };

