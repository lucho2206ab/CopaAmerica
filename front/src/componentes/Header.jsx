import React, { useState, useEffect } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useNavigate, Link } from 'react-router-dom'; // Importamos Link
import './estilos/Header.css';

const Header = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [username, setUsername] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    const storedUsername = localStorage.getItem('username');
    setIsAuthenticated(!!token);
    if (storedUsername) {
      setUsername(storedUsername);
    }
  }, []);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('username');
    setIsAuthenticated(false);
    setUsername('');
    navigate('/login');
    handleMenuClose();
  };

  return (
    <AppBar position="static" className="app-bar" sx={{ backgroundColor: '#508133' }}> {/* Cambié el color del AppBar */}
      <Toolbar>
        <Link to="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center' }}> {/* Envolvemos el logo con un Link */}
          <img src="/copaAmericaLogo.svg" alt="Logo" height="100" style={{ marginRight: '10px' }} />
          <Typography variant="h6" className="logo" color="white">
            Portal Deportivo
          </Typography>
        </Link>

        <div className="navbar-menu">
          <IconButton edge="end" color="inherit" aria-label="menu" onClick={handleMenuOpen}>
            <MenuIcon />
          </IconButton>
          <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleMenuClose}
          >
            <MenuItem onClick={() => { navigate('/home'); handleMenuClose(); }}>Home</MenuItem>
            <MenuItem onClick={() => { navigate('/players'); handleMenuClose(); }}>Jugadores</MenuItem>
            <MenuItem onClick={() => { navigate('/stadiums'); handleMenuClose(); }}>Estadios</MenuItem>
            <MenuItem onClick={() => { navigate('/results'); handleMenuClose(); }}>Resultados</MenuItem>
            <MenuItem onClick={() => { navigate('/register'); handleMenuClose(); }}>Registro</MenuItem>
            {isAuthenticated ? (
              <MenuItem onClick={handleLogout}>Cerrar sesión</MenuItem>
            ) : (
              <MenuItem onClick={() => { navigate('/login'); handleMenuClose(); }}>Iniciar sesión</MenuItem>
            )}
          </Menu>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
