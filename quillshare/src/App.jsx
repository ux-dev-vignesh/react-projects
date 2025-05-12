import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import HomePage from './pages/Home';
import LoginPage from './pages/Login';
import { isValidToken } from './services/auth';
  
const PrivateRoute = ({ children }) => {
  return isValidToken() ? children : <Navigate to="/login" replace />;
};

const App = () => {
  return (
    <Routes>
      {/* Root redirects to /home */}
      <Route path="/" element={<Navigate to="/home" replace />} />

      {/* Authenticated Layout */}
      <Route
        path="/"
        element={
          <PrivateRoute>
            <MainLayout />
          </PrivateRoute>
        }
      >
        <Route path="home" element={<HomePage />} />
      </Route>

      {/* Login Route */}
      <Route
        path="/login"
        element={
          isValidToken() ? <Navigate to="/home" replace /> : <LoginPage />
        }
      />
    </Routes>
  );
};

export default App;
