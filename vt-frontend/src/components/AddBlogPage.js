import React, { useState } from 'react';
import Header from './Header';
import { Link } from 'react-router-dom';
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
      <h2>My New Blog</h2>
      <form onSubmit={handleSubmit}>
        <table>
          <tr>
            <td>
              <label>Title:</label>
            </td>
            <td>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </td>
          </tr>
          <tr>
            <td>
              <label>Content:</label>
            </td>
            <td>
              <textarea
                value={content}
                onChange={(e) => setContent(e.target.value)}
              />
            </td>
          </tr>
          <tr>
            <td>
              <label>Slug (for SEO):</label>
            </td>
            <td>
              <textarea
                value={slug}
                onChange={(e) => setSlug(e.target.value)}
              />
            </td>
          </tr>
          <tr>
            <td>
              <label>Image URL:</label>
            </td>
            <td>
              <input
                type="text"
                size="40"
                value={image}
                onChange={(e) => setImage(e.target.value)}
              />
            </td>
          </tr>
        </table>
        <Link to="/">
          <button type="button">Cancel </button>
        </Link>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddBlogPage;
