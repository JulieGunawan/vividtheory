import React from 'react';
import {Link} from 'react-router-dom';

const Article = ({articles}) => 
    (
        <div className='blogs'>
            {articles.map ((post) => {
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
        </div>
    )
;

export default Article;
