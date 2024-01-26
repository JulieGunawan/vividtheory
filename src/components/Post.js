import React from 'react';
import {useParams} from 'react-router-dom';
import Content from './Content';
import Header from './Header';
import Article from './Article';

const Post = () =>{
    const {name} = useParams();
    const blogPost = Content.find((post) => post.slug === name);

    if (!blogPost) {
        return <div>Post not found</div>;
    }

    const otherArticles = Content.filter(post => post.slug !== name);

    return (
        <>
            <Header />
            <h1>{blogPost.title}</h1>
            <p>{blogPost.content}</p>
            <div className='other-blogs'>
                <h3>You Might Also Like</h3>
                <Article articles={otherArticles}/>
            </div>
        </>
    )
};

export default Post;