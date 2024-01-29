import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import Header from './Header';

const AllBlogs = () => {
    const [articles, setArticles] = useState([]);
    const [page, setPage] = useState(1);
    const getBlogs = async (page) => {
        try{
            const response = await fetch(`http://localhost:5000/blogs?page=${page}&limit=6`);
            const data = await response.json();
            const newData = data.filter((post) => post.deleted_at == null && post.published_at!=null);
            console.log(newData)
            setArticles(newData);

        }catch(error){
            console.log(error.message);
        }
    }

    const nextPage = () =>{
        setPage(page+1);
    };

    const previousPage = () =>{
        setPage(page-1);
    }

    useEffect (()=>{
        getBlogs(page);
    },[page]);

    return  (
        <div className='blogs'>
            <Header />
            <h1>All Blogs</h1>
            {articles.map((post) => {
            return (
                <Link className='list-item' to={`/${post.slug}`} key={post.id}>
                    <div className='blog-post'>
                        <h3>{post.title}</h3>
                        {post.content}
                        <p>Published at:{post.published_at}</p>
                    </div>
                </Link>
            );
        })} 
        <button className='previous' onClick={previousPage}>prev</button>
        <button className='next' onClick={nextPage}>next</button>
        </div>
    );
}

export default AllBlogs;
