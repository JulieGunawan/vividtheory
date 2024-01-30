import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Article = () => {
  const [articles, setArticles] = useState([]);

  const getBlogs = async () => {
    try {
      const response = await fetch('http://localhost:5000/blogs');
      const data = await response.json();
      const newData = data.filter((post) => post.deleted_at == null);
      setArticles(newData);
    } catch (error) {
      console.log(error.message);
    }
  };
  useEffect(() => {
    getBlogs();
  }, []);

  return (
    <div className="blogs">
      {articles.map((post) => {
        return (
          <Link className="list-item" to={`/${post.slug}`} key={post.id}>
            <div className="blog-post">
              <h3>{post.title}</h3>
              <div dangerouslySetInnerHTML={{ __html: post.content }} />
              <p>Published at:{post.published_at}</p>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default Article;
