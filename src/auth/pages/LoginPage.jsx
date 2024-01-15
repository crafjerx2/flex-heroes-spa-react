import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

export const LoginPage = () => {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const onLogin = () => {
    login('Carlos Pineda');
    navigate('/', {
      replace: true
    });
  };

  return (
    <div className="container mt-5">
      <h1>Login page</h1>
      <hr />

      <button
        className="btn btn-success"
        onClick={onLogin}
      >Login</button>
    </div>
  );
};
