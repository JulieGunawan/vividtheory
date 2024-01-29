import React, { useState, useEffect } from "react";
import {FaSearch} from 'react-icons/fa';
import SearchPage from './SearchPage';

const SearchBar = () => {
    const [input,setInput]=useState('');
    const [articles, setArticles] = useState([]);

    const handleChange = (event) =>{
        event.preventDefault();
        setInput(event.target.value)
        renderBlogs(event.target.value)
    };

    const renderBlogs = async (value) => {
        try{
            if(value == "") {
                setArticles([]);
            } else {
            const response = await fetch(`http://localhost:5000/blogs/`);
            const data = await response.json();
            
            const newData = data.filter((post) => post.title.toLowerCase().includes(value.toLowerCase()) && post.deleted_at == null);
            setArticles(newData);
        }
            
        } catch(error){
            console.log(error.message);
        }      
    }

    useEffect(() => {
        if (!input || input === "") {
            setArticles([]);
        } else {
            const filteredPosts = articles.filter((post) => 
                    post.title.toLowerCase().includes(input.toLowerCase())
            );
            setArticles(filteredPosts);
        }
    },[input]);

    return (  
        <>
        <div className="searchBar">
            <form>
                <FaSearch className="searchIcon"/>
                <input type="text" placeholder="Search..." value={input} onChange={handleChange}/>
                <button type="submit">Search</button>
            </form>   
        </div>
        <div>
            <SearchPage articles={articles} />
        </div>
        </>
    );
};

export default SearchBar;