import React from 'react';
import { Route, Navigate } from 'react-router-dom';

// Simule une vérification d'authentification (tu devrais le remplacer par ta logique réelle)
const isAuthenticated = () => {
    // Par exemple, vérifier si un token JWT existe dans le localStorage
    return localStorage.getItem('token') !== null;
};

const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route
        {...rest}
        render={(props) =>
            isAuthenticated() ? (
                <Component {...props} />
            ) : (
                // Si l'utilisateur n'est pas authentifié, rediriger vers la page de login
                <Navigate to="/login" />
            )
        }
    />
);

export default PrivateRoute;