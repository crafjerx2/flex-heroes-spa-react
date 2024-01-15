import React from 'react';
import { AppRoute } from './router/AppRoute';
import { AuthProvider } from './auth';

export const HeroeApp = () => {
  return (
    <AuthProvider>
      <AppRoute />
    </AuthProvider>
  );
};
