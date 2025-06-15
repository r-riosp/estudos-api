// src/pages/HomePage.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Box, Typography, Button } from '@mui/material';

function HomePage() {
    return (
        <Container component="main" maxWidth="xs">
            <Box sx={{
                marginTop: 8,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
            }}>
                <Typography component="h1" variant="h5" sx={{ mb: 2 }}>
                    Bem-vindo à Gatorion
                </Typography>
                <Link to="/login">
                    <Button variant="contained" sx={{ mt: 3, mb: 2 }}>
                        Fazer Login
                    </Button>
                </Link>
                <Link to="/register">
                    <Button variant="outlined" sx={{ mt: 2, mb: 2 }}>
                        Criar Conta
                    </Button>
                </Link>
            </Box>
        </Container>
    );
}

export default HomePage;