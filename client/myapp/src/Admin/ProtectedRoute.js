import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
    const isAdminLoggedIn = localStorage.getItem('isAdminLoggedIn');

    // Always check login status
    if (!isAdminLoggedIn) {
        return <Navigate to="/Admin" replace />;
    }

    return children;
};

export default ProtectedRoute;
