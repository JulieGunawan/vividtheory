import React, { useState, useEffect } from 'react';
import { FaSearch } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

const SearchBar = () => {
  const [input, setInput] = useState('');
  const [articles, setArticles] = useState([]);
  const [page, setPage] = useState(1);
  const [isAtEnd, setIsAtEnd] = useState(true);
  const [isAtBeginning, setIsAtBeginning] = useState(true);

  const handleChange = (event) => {
    setInput(event.target.value);
    setPage(1);
  };

  const nextPage = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const previousPage = () => {
    setPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  useEffect(() => {
    const renderBlogs = async () => {
      try {
        if (!input) {
          setArticles([]);
          setIsAtEnd(true);
          setIsAtBeginning(true);
        } else {
          const response = await fetch(
            `http://localhost:5000/blogs?page=${page}&limit=6`,
          );
          const data = await response.json();

          const newData = data.filter(
            (post) =>
              post.title.toLowerCase().includes(input.toLowerCase()) &&
              post.deleted_at == null &&
              post.published_at != null,
          );

          setArticles(newData);
          setIsAtEnd(newData.length < 6); // Check if there are less than 6 items on the current page
          setIsAtBeginning(page === 1);
        }
      } catch (error) {
        console.log(error.message);
      }
    };
    renderBlogs();
  }, [input, page]);

  return (
    <>
      <div className="searchBar">
        <form>
          <FaSearch className="searchIcon" />
          <input
            type="text"
            placeholder="Search..."
            value={input}
            onChange={handleChange}
          />
        </form>
      </div>
      <div>
        <div className="searchPage">
          <h2>Search Results:</h2>
          <Grid container spacing={2}>
            {articles.map((post) => (
              <Grid item xs={12} sm={6} md={4} lg={4} key={post.id}>
                <Link className="list-result" to={`/${post.slug}`}>
                  <h3>{post.title}</h3>
                  <div
                    className="searchContent"
                    dangerouslySetInnerHTML={{
                      __html: post.content.substring(0, 150) + '...',
                    }}
                  />
                  <div>
                    Published at:{' '}
                    {new Date(post.published_at).toLocaleString('en-US', {
                      year: 'numeric',
                      month: '2-digit',
                      day: '2-digit',
                    })}
                  </div>
                </Link>
              </Grid>
            ))}
          </Grid>
          <Box display="flex" justifyContent="space-between">
            {!isAtBeginning && (
              <Button variant="contained" onClick={previousPage}>
                PREV
              </Button>
            )}
            {!isAtEnd && (
              <Button variant="contained" onClick={nextPage}>
                NEXT
              </Button>
            )}
          </Box>
        </div>
      </div>
    </>
  );
};

export default SearchBar;
