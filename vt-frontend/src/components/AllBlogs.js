// import React from 'react';
// import Header from './Header';
// // import SearchBar from './SearchBar';
// import Article from './Article';
// // import AddBlogSection from './AddBlogSection';
// const HomePage = () => {
//     return (
//         <div className='homePage'>
//             <Header/>
//             <h1>Blogs</h1>
//             {/* <SearchBar/> */}
//             <Article />
//             {/* <AddBlogSection /> */}
//         </div>
//     );
// };

// export default HomePage;

import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import Header from './Header';

const AllBlogs = () => {
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

        </div>
    );
}

export default AllBlogs;
