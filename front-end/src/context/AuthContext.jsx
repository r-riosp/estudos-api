import React, { createContext, useState, useContext, useEffect } from 'react';

// 1. Criando a "Mochila" (o Contexto)
const AuthContext = createContext(null);

// 2. Criando o Componente que vai fornecer os dados (o "Dono da Mochila")
export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  // Efeito para carregar o usuário do localStorage quando o app iniciar
  useEffect(() => {
    const storedUser = localStorage.getItem('gatorion-user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  // Função para "colocar o usuário na mochila" e no navegador
  const login = (userData) => {
    setUser(userData);
    localStorage.setItem('gatorion-user', JSON.stringify(userData));
  };

  // Função para "tirar o usuário da mochila" e do navegador
  const logout = () => {
    setUser(null);
    localStorage.removeItem('gatorion-user');
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

// 3. Criando um "atalho" para usar a mochila (um Hook customizado)
export function useAuth() {
  return useContext(AuthContext);
}