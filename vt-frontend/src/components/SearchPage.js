// import React, {useEffect, useState} from 'react';
// import { useLocation, Link } from 'react-router-dom';
import React from 'react';
import {Link} from 'react-router-dom';
const SearchPage = ({articles}) => {
    // const[currentPage, setCurrentPage] = useState(1);
    
    return (
        <div className='searchPage'>
            <h2>Search Results:</h2>
            <div className='searchResults'>
                {articles.map((post) => (
                    <Link className='list-result' to ={`/${post.slug}`} key={post.id}>
                        <h2>{post.title}</h2>
                        <p>{post.content}</p>
                        <p>Published at:{post.published_at}</p>
                    </Link>
                ))}            
            </div>
        </div>
    );
};

export default SearchPage;

