// src/pages/RegisterPage.jsx
import React, { useState } from 'react';
import { registerUser } from '../services/api';

import { useNavigate, Link as RouterLink } from 'react-router-dom';
import { Button, TextField, Typography, Container, Box, Link } from '@mui/material';

function RegisterPage() {
  // Pensa nesse useState como uma "caixinha mágica" que guarda os dados do formulário
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    senha: '',
  });

  // Essa função é chamada toda vez que você digita em algum campo
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Essa função é chamada quando você clica no botão "Cadastrar"
  const handleSubmit = async (e) => {
    e.preventDefault(); // Impede que a página recarregue
    try {
      // Chama a função de cadastro da nossa API
      const response = await registerUser(formData);
      console.log('Usuário cadastrado com sucesso!', response.data);
      alert('Cadastro realizado com sucesso! Agora você pode fazer o login.');
      // Futuramente, a gente pode redirecionar o usuário pra página de login aqui
      window.location.href = '/login'; // Redireciona para a página de login
    } catch (error) {
      console.error('Erro no cadastro:', error.response.data);
      // Pega a mensagem de erro da sua API (ex: "Email já cadastrado")
      alert(`Erro no cadastro: ${error.response.data.message || 'Tente novamente.'}`);
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Typography component="h1" variant="h5">
          Cadastrar
        </Typography>
        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="nome"
            label="Nome Completo"
            name="nome"
            autoComplete="name"
            autoFocus
            value={formData.nome}
            onChange={handleChange}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Endereço de E-mail"
            name="email"
            autoComplete="email"
            value={formData.email}
            onChange={handleChange}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="senha"
            label="Senha"
            type="password"
            id="senha"
            autoComplete="current-password"
            value={formData.senha}
            onChange={handleChange}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Cadastrar
          </Button>
          <Link component={RouterLink} to="/login" variant="body2">
            {"Já tem uma conta? Faça login"}
          </Link>
        </Box>
      </Box>
    </Container>

    /*{ <h2>Página de Cadastro</h2>
  <form onSubmit={handleSubmit}>
    <div>
      <label>Nome:</label>
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      />
        <input
          type="text"
          name="nome"
          value={formData.nome}
          onChange={handleChange}
          required
        />
    </div>
    <div>
      <label>Email:</label>
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        required
      />
    </div>
    <div>
      <label>Senha:</label>
      <input
        type="password"
        name="senha"
        value={formData.senha}
        onChange={handleChange}
        required
        minLength="8"
      />
    </div>
    <button type="submit">Cadastrar</button>
  </form>
</div>/}
    );*/
  );
}

export default RegisterPage;