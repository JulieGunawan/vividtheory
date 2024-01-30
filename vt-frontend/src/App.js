import './App.css';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Post from './components/Post';
import HomePage from './components/HomePage';
import AllBlogs from './components/AllBlogs';
import AddBlogPage from './components/AddBlogPage';
import DeleteBlogPage from './components/DeleteBlogPage';

function App() {
  return (
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
  );
}

export default App;
