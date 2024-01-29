import React from 'react';
import Header from './Header';
import SearchBar from './SearchBar';
// import Article from './Article';
// import AddBlogSection from './AddBlogSection';
const HomePage = () => {
    return (
        <div className='homePage'>
            <Header/>
            <h1>Blogs</h1>
            <SearchBar/>
            {/* <Article /> */}
            {/* <AddBlogSection /> */}
        </div>
    );
};

export default HomePage;