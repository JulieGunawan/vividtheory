import React from 'react';
import {Link} from 'react-router-dom';

const Article = ({articles}) => {
    
    return 
    (
        <>
            {articles.map ((post) => {
                return (
                    <Link className='list-item' to={`/${post.slug}`} key={post.key}>
                        <div className='blog-post'>
                            <h3>{post.title}</h3>
                            {post.content}
                        </div>
                    </Link>
                );
            })}
        </>
    )
};

export default Article;
