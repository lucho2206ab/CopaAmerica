import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Header from './componentes/Header';
import Home from './pages/Home';
import Players from './pages/Players';
import Stadiums from './pages/Stadiums';
import Login from './pages/Login';
import Register from './pages/Register';
import ProtectedRoute from './componentes/ProtectedRoute';
import Match from './pages/Match'; // Importar el componente Match
import Match2 from './pages/Match2'; // Importar el componente Match2
import Positions from './pages/Positions';
import TopScorers from './pages/TopScorers'; 
import Results from './pages/Results';
import Footer from './componentes/Footer';

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route 
          path="/positions" 
          element={
            <ProtectedRoute>
              <Positions />
            </ProtectedRoute>
          } 
        /> 
        <Route 
          path="/topscorers" 
          element={
            <ProtectedRoute>
              <TopScorers />
            </ProtectedRoute>
          } 
        /> 
        <Route 
          path="/results" 
          element={
            <ProtectedRoute>
              <Results />
            </ProtectedRoute>
          } 
        />
        <Route 
          path="/players" 
          element={
            <ProtectedRoute>
              <Players />
            </ProtectedRoute>
          } 
        />
        <Route 
          path="/stadiums" 
          element={
            <ProtectedRoute>
              <Stadiums />
            </ProtectedRoute>
          } 
        />
        <Route 
          path="/match/:matchId" 
          element={
            <ProtectedRoute>
              <Match />
            </ProtectedRoute>
          } 
        />
        <Route 
          path="/match2/:matchId" 
          element={
            <ProtectedRoute>
              <Match2 />
            </ProtectedRoute>
          } 
        />
        <Route 
          path="/login" 
          element={<Login />} 
        />
        <Route 
          path="/register" 
          element={<Register />} 
        />
        <Route 
          path="*" 
          element={<Navigate to="/home" replace />} 
        />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
