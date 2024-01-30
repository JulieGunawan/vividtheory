import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
// import Button from '@mui/material/Button';
import {Box} from '@mui/system';
// import {Card} from '@mui/material';

const AllBlogs = () => {
  const [isAtEnd, setIsAtEnd] = useState(false);
  const [isAtBeginning, setIsAtBeginning] = useState(true);
  const [articles, setArticles] = useState([]);
  const [page, setPage] = useState(1);
  const getBlogs = async (page) => {
    try {
      const response = await fetch(
        `http://localhost:5000/blogs?page=${page}&limit=6`,
      );
      const data = await response.json();

      console.log(data);
      setArticles(data);
    } catch (error) {
      console.log(error.message);
    }
  };

  const nextPage = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const previousPage = () => {
    setPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  useEffect(() => {
    getBlogs(page);
    setIsAtBeginning(page === 1);
    setIsAtEnd(page === Math.ceil(articles.length / 6));
  }, [page]);

  return (
    <div className="blogs">
      <Header />
      <h1>All Blogs</h1>
      <Box sx={{ color: 'text.secondary' }}>Sessions</Box>
      {articles.map((post) => {
        return (
          <Link className="list-item" to={`/${post.slug}`} key={post.id}>
            <div className="blog-post">
              <h3>{post.title}</h3>
              <div dangerouslySetInnerHTML={{ __html: post.content.substring(0,150) + '...' }} />
              <p>
                Published at:{' '}
                {new Date(post.published_at).toLocaleString('en-US', {
                  year: 'numeric',
                  month: '2-digit',
                  day: '2-digit',
                })}
              </p>
            </div>
          </Link>
        );
      })}
      <div>
        {!isAtBeginning && (
          <button className="previous" onClick={previousPage}>
            prev
          </button>
        )}
        {!isAtEnd && (
          <button className="next" onClick={nextPage}>
            next
          </button>
        )}
      </div>
    </div>
  );
};

export default AllBlogs;
