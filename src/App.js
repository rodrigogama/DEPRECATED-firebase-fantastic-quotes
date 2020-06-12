import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { AuthenticationProvider } from './context/authentication';
import useAuthentication from './hooks/useAuthentication';
import Routes from './routes';

const AuthHandler = () => {
  const { isAuthReady } = useAuthentication();

  return isAuthReady ? (
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  ) : (
    <div>Carregando...</div>
  );
};

const App = () => (
  <AuthenticationProvider>
    <AuthHandler />
  </AuthenticationProvider>
);

export default App;
