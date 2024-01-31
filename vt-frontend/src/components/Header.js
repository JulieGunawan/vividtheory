import React from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: 'rgba(255,255,255,0.1)',
    },
  },
});

const Header = () => (
  <>
    <ThemeProvider theme={theme}>
      <AppBar position="static">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Link to="/">
              <img
                src="https://assets-global.website-files.com/656f567f632de4526257bc88/658780f2e0c14e285bc49220_Horizontal%20Logo.svg"
                alt="vivid-theory-logo"
              />
            </Link>
            <Box sx={{ mx: 'auto' }}>
              <ul className="navigation">
                <li>
                  <Link to="/all-blogs">All Blogs</Link>
                </li>
                <li>
                  <Link to="/create">Add Blog</Link>
                </li>
              </ul>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </ThemeProvider>
  </>
);

export default Header;
