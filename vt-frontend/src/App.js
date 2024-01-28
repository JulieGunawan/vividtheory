import './App.css';
import React from 'react';
import { Routes, Route} from 'react-router-dom';
import Blogs from './components/Blogs';
import Post from './components/Post';
import SearchBar from './components/SearchBar';
// import Content from './components/Content';
import SearchPage from './components/SearchPage';
import AddBlogPage from './components/AddBlogPage';
import DeleteBlogPage from './components/DeleteBlogPage';

function App() {
  return (
    <div className="App">
      <SearchBar/>
     
      <Routes>
        <Route path="/" element={<Blogs/>} />
        <Route path="/:name" element={<Post/>} />
        <Route path="/" element={<SearchPage />} /> 
        {/* this needs to be checked if search will replace the Blog page */}
        <Route path="/create" element={<AddBlogPage />} />
        <Route path="/delete/:slug" element={<DeleteBlogPage />} />
      </Routes>
      
    </div>
  );
}

export default App;
