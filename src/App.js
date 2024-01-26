import './App.css';
import React from 'react';
import { Routes, Route} from 'react-router-dom';
import Blogs from './components/Blogs';
import Post from './components/Post';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Blogs/>} />
        <Route path="/:name" element={<Post/>} />
      </Routes>
    </div>
  );
}

export default App;
