import React from "react";

const SearchBar = () => {
    const [input,setInput]=React.useState('');

    const searchFunction = (event) => {
        setInput(event.target.value);
        console.log("search here: " + input);    
    }

    return (
        <div className="searchBar">
            <input type="text" placeholder="Search..." onChange={searchFunction}/>
        </div>
    );
};

export default SearchBar;