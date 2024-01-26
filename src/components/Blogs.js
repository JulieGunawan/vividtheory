import React from 'react';
import Header from './Header';
import Article from './Article';
import Content from './Content';

const Blogs = () => {
    return (
        <div className='Blog'>
            <Header/>
            <h1>Blogs</h1>
            <Article articles={Content}/>
        </div>
    );
};

export default Blogs;