import React, {useState, useEffect} from 'react';
import { useParams} from 'react-router-dom';
import Header from './Header';
import DeleteSection from './DeleteSection';

const Post = () =>{
    const [articles, setArticles] = useState([]);

    const {name} = useParams();
    const getBlogs = async () => {
        try{
            console.log("slug is: " + name);
            const response = await fetch(`http://localhost:5000/blogs/${name}`);
            const data = await response.json();
            // const newData = data.filter((post) => post.deleted_at == null);
            setArticles(data);
        }catch(error){
            console.log(error.message);
        }
    }
    useEffect (()=>{
        getBlogs();
    },[]);

    
    // const blogPost = articles.find((post) => post.slug === name);

    // if (!blogPost) {
    //     return <div>Post not found</div>;
    // }

    // const otherArticles = articles.filter(post => post.slug !== name);
    // console.log(otherArticles);

    return (
        <>
            <Header />
            <h1>{articles.title}</h1>
            <div dangerouslySetInnerHTML={{__html: articles.content}} />
            <DeleteSection />
            <div className='other-blogs'>
                <h3>You Might Also Like</h3>
                {/* {otherArticles.map((post) => {
                    return (
                        <Link className='list-item' to={`/${post.slug}`} key={post.id}>
                            <div className='blog-post'>
                                <h3>{post.title}</h3>
                                <div dangerouslySetInnerHTML={{__html: post.content}} />
                                <p>Published at: {new Date(post.published_at).toLocaleString('en-US', { year: 'numeric', month: '2-digit', day: '2-digit' })}</p>    

                            </div>
                        </Link>
                    );
                })} */}
              
            </div>
        </>
    )
};

export default Post;