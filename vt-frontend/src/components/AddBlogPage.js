import React, { useState } from 'react';
import Header from './Header';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
// import TextField from '@mui/material/TextField';

//functionality to add a Blog
const AddBlogPage = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [slug, setSlug] = useState('');
  const [image, setImage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const published_at = new Date();
      const blog = { title, content, slug, image, published_at };
      console.log(blog);
      const response = await fetch('http://localhost:5000/blogs', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(blog),
      });
      console.log(response);

      if (response.ok) {
        alert('Your blog has been added');
        setTitle('');
        setSlug('');
        setContent('');
        setImage('');
      } else {
        alert('You might enter a duplicate slug');
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="addBlog">
      <Header />
      <h2>Add My New Blog</h2>
      <form onSubmit={handleSubmit}>
        <Stack
          component="form"
          sx={{
            width: '80%',
            marginBottom: '50px',
          }}
          spacing={2}
          noValidate
          autoComplete="off"
        >
          <label>Title:</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          <label>Content:</label>
          <textarea
            cols="100"
            rows="10"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
          <label>Slug (for SEO):</label>
          <textarea value={slug} onChange={(e) => setSlug(e.target.value)} />
          <label>Image URL:</label>
          <input
            type="text"
            size="40"
            value={image}
            onChange={(e) => setImage(e.target.value)}
          />
        </Stack>

        <div className="buttons">
          <Link to="/">
            <Button variant="contained" type="button">
              Cancel{' '}
            </Button>
          </Link>
          <Button variant="contained" color="success" type="submit">
            Submit
          </Button>
        </div>
      </form>
    </div>
  );
};

export default AddBlogPage;
