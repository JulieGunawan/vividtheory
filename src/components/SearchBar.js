import React, { useState, useEffect } from "react";


const SearchBar = ({content}) => {
    const [input,setInput]=useState('');
    const [filteredBlogs, setFilteredBlogs] = useState([]);

    const searchFunction = (event) => {
        event.preventDefault();
        setInput(event.target.value.toLowerCase());
        console.log("search here: " + event.target.value);  
    }

    useEffect(() => {
        if (input ===""){
            setFilteredBlogs([]);
        } else {
            const filteredPosts = content.filter((post) =>{
            return post.title.toLowerCase().includes(input)
    });
        setFilteredBlogs(filteredPosts);}
    },[input, content]);

    return (
        <>
        <div className="searchBar">
            <input type="text" placeholder="Search..." value={input} onChange={searchFunction}/>
        </div>
        <div>
            HelloWorld
         {filteredBlogs.map((post) => (
            <div key={post.id}>
                <h2>{post.title}</h2>
            </div>
         ))}
       </div>
       </>
    );
};

export default SearchBar;