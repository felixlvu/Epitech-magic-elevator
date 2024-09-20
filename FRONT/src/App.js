import { Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from './pages/loginPage/loginPage.js';
import PrivateRoute from './pages/privatePage/privatePage.js';
import Dashboard from './pages/dashboardPage/dashboardPage.js';
import { isAuthenticated } from './utils/auth/auth.js';
import './App.css';

function App() {
    return (
        <Routes>
            {/* Page de login ouverte à tout le monde */}
            <Route exact path="/login" element={<LoginPage />} />

            {/* Route protégée pour les utilisateurs authentifiés */}
            <Route
                exact
                path="/dashboard"
                element={isAuthenticated() ? <Dashboard /> : <Navigate to="/login" />}
            />

            {/* Par défaut, rediriger vers la page de login si aucune route n'est trouvée */}
            <Route path="*" element={<Navigate to="/login" />} />
        </Routes>
    );
}

export default App;
