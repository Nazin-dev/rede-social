import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function RedirectToHomeIfAuthenticated() {
  const navigate = useNavigate();

  useEffect(() => {
    const token = sessionStorage.getItem('token');

    if (token) {
      // Aqui você poderia também verificar a validade do token,
      // mas vamos assumir que, se o token existe, ele é válido
      navigate('/home');
    }
  }, [navigate]);

  return null; // Este componente apenas redireciona, então não precisa renderizar nada
}

export default RedirectToHomeIfAuthenticated;
