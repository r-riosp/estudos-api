// src/components/ProtectedRoute.jsx
import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

function ProtectedRoute({ children }) {
  const { user } = useAuth(); // Olha na mochila pra ver se tem usuário

  if (!user) {
    // Se não tiver usuário, manda o cara pra página de login
    return <Navigate to="/login" />;
  }

  // Se tiver usuário, deixa ele ver a página que ele queria
  return children;
}

export default ProtectedRoute;