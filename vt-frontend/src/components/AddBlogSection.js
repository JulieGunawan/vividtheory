import React from 'react';
import { Link } from 'react-router-dom';

const AddBlogSection = () => {
  return (
    <div className="addBlog">
      <h2>Want to add your blog here?</h2>
      <Link to="/create">
        <button type="button">Yes! Add My Blog</button>
      </Link>
    </div>
  );
};

export default AddBlogSection;
