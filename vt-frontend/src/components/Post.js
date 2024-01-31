import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import Header from './Header';
import DeleteSection from './DeleteSection';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

const Post = () => {
  const [articles, setArticles] = useState([]);
  const [randomBlogs, setRandomBlogs] = useState([]);
  const { name } = useParams();
  const getBlogs = async () => {
    try {
      const response = await fetch(
        `http://localhost:5000/blogs/getBySlug/${name}`,
      );
      const data = await response.json();
      setArticles(data);
    } catch (error) {
      console.log(error.message);
    }
  };

  const generateRandomBlogs = async () => {
    try {
      const response = await fetch('http://localhost:5000/blogs/random');
      const randomData = await response.json();
      setRandomBlogs(randomData);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    getBlogs();
    generateRandomBlogs();
  }, [name]);

  return (
    <>
      <Container maxWidth="lg">
        <Header />
        <h1>{articles.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: articles.content }} />
        <p>
          Published at:{' '}
          {new Date(articles.published_at).toLocaleString('en-US', {
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
          })}
        </p>
        <DeleteSection />
        <Box
          component="span"
          sx={{
            display: 'block',
            backgroundColor: 'white',
            padding: '20px',
            marginTop: '35px',
          }}
        >
          <h3>You Might Also Like</h3>
          <Grid container spacing={2}>
            {randomBlogs.map((post) => {
              return (
                <Grid item xs={12} md={6} lg={3} key={post.id}>
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
        </Box>
      </Container>
    </>
  );
};

export default Post;
