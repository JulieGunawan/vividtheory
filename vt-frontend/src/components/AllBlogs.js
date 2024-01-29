import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import Header from './Header';

const AllBlogs = () => {
    const [isAtEnd, setIsAtEnd] = useState(false);
    const [isAtBeginning, setIsAtBeginning] = useState(true);
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
        if (isAtEnd){
            Math.ceil(articles.length/6)
        } else {
            setPage(page+1);
        }
    };

    const previousPage = () =>{
        if (isAtBeginning){
            setPage(1);
        }else{
            setPage(page-1);
        }
    }

    useEffect (()=>{
        getBlogs(page);
        setIsAtBeginning(page === 1);
        setIsAtEnd(page === Math.ceil(articles.length/6));
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
                        <div dangerouslySetInnerHTML={{__html: post.content}} />
                        <p>Published at: {new Date(post.published_at).toLocaleString('en-US', { year: 'numeric', month: '2-digit', day: '2-digit' })}</p>    

                    </div>
                </Link>
            );
        })} 
        {isAtBeginning ? null : <button className='previous' onClick={previousPage}>prev</button>}
        {isAtEnd ? null : <button className='next' onClick={nextPage}>next</button>}
        </div>
    );
}

export default AllBlogs;
