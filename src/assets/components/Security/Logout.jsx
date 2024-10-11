import React from 'react';
import { Navigate } from "react-router-dom";

export default function Logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('refreshToken');
    localStorage.removeItem('user');
    sessionStorage.clear();
    sessionStorage.removeItem('token');
    
    // Redireciona para a página de login
    return <Navigate to="/" replace />;
}