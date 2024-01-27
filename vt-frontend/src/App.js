import './App.css';
import React from 'react';
import { Routes, Route} from 'react-router-dom';
import Blogs from './components/Blogs';
import Post from './components/Post';
import SearchBar from './components/SearchBar';
import Content from './components/Content';
import SearchPage from './components/SearchPage';
import AddBlogPage from './components/AddBlogPage';

function App() {
  return (
    <div className="App">
      <SearchBar/>
     
      <Routes>
        <Route path="/" element={<Blogs/>} />
        <Route path="/:name" element={<Post/>} />
        <Route path="/search" element={<SearchPage content={Content} />} />
        <Route path="/add-blog" element={<AddBlogPage />} />
      </Routes>
      
    </div>
  );
}

export default App;
