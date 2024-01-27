import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';

const SearchBar = () => {
    const [input,setInput]=useState('');
    const navigate = useNavigate();

    const handleSearch = (event) => {
        event.preventDefault();
        navigate(`/search?query=${input}`);
    }

    const handleChange = (event) =>{
        setInput(event.target.value)
    };

    return (  
        <div className="searchBar">
            <form onSubmit={handleSearch}>
                <input type="text" placeholder="Search..." value={input} onChange={handleChange}/>
                <button type="submit">Search</button>
            </form>   
        </div>
    );
};

export default SearchBar;