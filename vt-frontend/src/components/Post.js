import React, {useState, useEffect} from 'react';
import {Link, useParams} from 'react-router-dom';
import Header from './Header';
import DeleteSection from './DeleteSection';

const Post = () =>{
    const [articles, setArticles] = useState([]);

    const getBlogs = async () => {
        try{
            const response = await fetch('http://localhost:5000/blogs');
            const data = await response.json();
            const newData = data.filter((post) => post.deleted_at == null);
            setArticles(newData);
        }catch(error){
            console.log(error.message);
        }
    }
    useEffect (()=>{
        getBlogs();
    },[]);

    const {name} = useParams();
    const blogPost = articles.find((post) => post.slug === name);

    if (!blogPost) {
        return <div>Post not found</div>;
    }

    const otherArticles = articles.filter(post => post.slug !== name);
    console.log(otherArticles);

    return (
        <>
            <Header />
            <h1>{blogPost.title}</h1>
            <p>{blogPost.content}</p>
            <DeleteSection />
            <div className='other-blogs'>
                <h3>You Might Also Like</h3>
                {otherArticles.map((post) => {
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
              
            </div>
        </>
    )
};

export default Post;