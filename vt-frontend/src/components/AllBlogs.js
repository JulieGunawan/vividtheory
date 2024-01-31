import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

const AllBlogs = () => {
  const defaultTheme = createTheme();
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
    setPage(page);
    setIsAtBeginning(page === 1);
    setIsAtEnd(page > 1 && Math.ceil(articles.length / 6) === 0);
  }, [page]);

  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <Container maxWidth="lg">
        <Header />
        <h1>All Blogs</h1>
        <Grid container spacing={2}>
          {articles.map((post) => {
            return (
              <Grid item xs={12} md={6} lg={4} key={post.id}>
                <Link className="list-item" to={`/${post.slug}`}>
                  <div className="blog-post">
                    <h3>{post.title}</h3>
                    <div
                      dangerouslySetInnerHTML={{
                        __html: post.content.substring(0, 150) + '...',
                      }}
                    />
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
              </Grid>
            );
          })}
        </Grid>
        <Box display="flex" justifyContent="space-between">
          {!isAtBeginning && (
            <Button
              variant="contained"
              className="previous"
              onClick={previousPage}
            >
              PREV
            </Button>
          )}
          {!isAtEnd && (
            <Button variant="contained" className="next" onClick={nextPage}>
              NEXT
            </Button>
          )}
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default AllBlogs;
