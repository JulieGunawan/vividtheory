import './App.css';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Post from './components/Post';
import HomePage from './components/HomePage';
import AllBlogs from './components/AllBlogs';
import AddBlogPage from './components/AddBlogPage';
import DeleteBlogPage from './components/DeleteBlogPage';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';

function App() {
  const defaultTheme = createTheme();

  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <Container maxWidth="lg">
        <div className="App">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/all-blogs" element={<AllBlogs />} />
            <Route path="/:name" element={<Post />} />
            {/* this needs to be checked if search will replace the Blog page */}
            <Route path="/create" element={<AddBlogPage />} />
            <Route path="/delete/:slug" element={<DeleteBlogPage />} />
          </Routes>
        </div>
      </Container>
    </ThemeProvider>
  );
}

export default App;
