import React from 'react';
import Header from './Header';
import Article from './Article';
import AddBlogSection from './AddBlogSection';
const Blogs = () => {
    return (
        <div className='blogPage'>
            <Header/>
            <h1>Blogs</h1>
            <Article />
            <AddBlogSection />
        </div>
    );
};

export default Blogs;