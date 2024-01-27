import './App.css';
import React from 'react';
import { Routes, Route} from 'react-router-dom';
import Blogs from './components/Blogs';
import Post from './components/Post';
import SearchBar from './components/SearchBar';
import Content from './components/Content';
import SearchPage from './components/SearchPage';

function App() {
  return (
    <div className="App">
      <SearchBar/>
      <Routes>
        <Route path="/" element={<Blogs/>} />
        <Route path="/:name" element={<Post/>} />
        <Route path="/search" element={<SearchPage content={Content} />} />
      </Routes>
    </div>
  );
}

export default App;
