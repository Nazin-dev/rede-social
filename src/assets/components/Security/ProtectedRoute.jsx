import React from 'react';
import { Navigate } from 'react-router-dom';

function ProtectedRoute({ children }) {
  // Verifica se o token está presente no sessionStorage
  const token = sessionStorage.getItem('token');

  // Se não houver token, redireciona para a página de login
  if (!token) {
    return <Navigate to="/" replace />;
  }

  // Caso o token exista, permite que a rota seja exibida
  return children;
}

export default ProtectedRoute;
