import React, {useEffect, useState} from 'react';
import { useLocation, Link } from 'react-router-dom';

const SearchPage = () => {
    const location = useLocation();
    const searchParams= new URLSearchParams(location.search);
    const query= searchParams.get('query');

    const [filteredBlogs, setFilteredBlogs] = useState([]);

    useEffect(() => {
        if (!query || query === "") {
            setFilteredBlogs([]);
        } else {
            const filteredPosts = filteredBlogs.filter((post) => 
                 post.title.toLowerCase().includes(query.toLowerCase())
            );
            setFilteredBlogs(filteredPosts);
        }
    },[query, filteredBlogs]);

    return (
        <div className='searchPage'>
            <h1>Search Results:</h1>
            <div className='searchResults'>
                {filteredBlogs.map((post) => (
                    <Link className='list-result' to ={`/${post.slug}`} key={post.id}>
                        <h2>{post.title}</h2>
                        <p>{post.content}</p>
                    </Link>
                ))}    

                
            </div>
        </div>
    );
};

export default SearchPage;

