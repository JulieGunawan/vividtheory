import React, { useState, useEffect } from 'react';
import { FaSearch } from 'react-icons/fa';
import { Link } from 'react-router-dom';


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
          <button type="submit">Search</button>
        </form>
      </div>
      <div>
        <div className="searchPage">
          <h2>Search Results:</h2>
          <div className="searchResults">
            {articles.map((post) => (
              <Link className="list-result" to={`/${post.slug}`} key={post.id}>
                <h2>{post.title}</h2>
                <div dangerouslySetInnerHTML={{ __html: post.content.substring(0,150) + '...' }} />
                <p>
                  Published at:{' '}
                  {new Date(post.published_at).toLocaleString('en-US', {
                    year: 'numeric',
                    month: '2-digit',
                    day: '2-digit',
                  })}
                </p>
              </Link>
            ))}
          </div>
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
    </>
  );
};

export default SearchBar;
