// src/pages/DashboardPage.jsx
import React from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

function DashboardPage() {
  const { user, logout } = useAuth(); // Pega o usuário e a função de logout da mochila
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login'); // Redireciona para o login após sair
  };

  // Se por algum motivo não tiver usuário, não mostra nada
  if (!user) {
    return <p>Carregando...</p>;
  }

  return (
    <div>
      <h2>Dashboard do Gatorion</h2>
      <h3>Bem-vindo de volta, {user.nome}!</h3>
      <p>Seu e-mail: {user.email}</p>
      <br />
      <button onClick={handleLogout}>Sair</button>
    </div>
  );
}

export default DashboardPage;