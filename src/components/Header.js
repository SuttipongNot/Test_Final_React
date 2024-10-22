import React from 'react';
import { AppBar, Toolbar, Button, Box } from '@mui/material';
import { useNavigate, useLocation } from 'react-router-dom';
import logo from './image/logoweb.png';  // นำเข้ารูปภาพโลโก้
 
export default function Header() {
  const navigate = useNavigate();
  const location = useLocation();
 
  const handleSignInClick = () => {
    navigate('/signinadmin');
  };
 
  const handleLogoutClick = () => {
    localStorage.removeItem('token');
    navigate('/signinadmin');
  };
 
  const handleHomeClick = () => {
    navigate('/');
  };
 
  const isDashboard = location.pathname === '/dashboard';
 
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="fixed"
        sx={{
          backgroundColor: 'rgba(255, 182, 193, 0.8)',
          boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)',
        }}
      >
        <Toolbar>
          <Box
            component="img"
            src={logo}  // ใช้โลโก้ที่นำเข้า
            alt="Logo"
            onClick={handleHomeClick}
            sx={{
              height: 100,
              width: 100,
              cursor: 'pointer',
            }}
          />
          <Box sx={{ flexGrow: 1 }} />
          {isDashboard ? (
            <Button
              variant="contained"
              color="secondary"
              sx={{
                fontWeight: 'bold',
                fontSize: '16px',
                backgroundColor: '#FEFFDA',
                borderRadius: '10px',
                border: '1px solid #000',
                color: '#000',
                '&:hover': {
                  backgroundColor: '#f5f5a0',
                },
              }}
              onClick={handleLogoutClick}
              aria-label="ออกจากระบบ"
            >
              ออกจากระบบ
            </Button>
          ) : (
            <Button
              variant="contained"
              color="secondary"
              sx={{
                fontWeight: 'bold',
                fontSize: '16px',
                backgroundColor: '#FEFFDA',
                borderRadius: '10px',
                border: '1px solid #000',
                color: '#000',
                '&:hover': {
                  backgroundColor: '#f5f5a0',
                },
              }}
              onClick={handleSignInClick}
              aria-label="เข้าสู่ระบบ"
            >
              เข้าสู่ระบบ
            </Button>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}