import React  from 'react';
import { Link, useLocation } from 'react-router-dom';

const AddBlogSection = () => {
    const location = useLocation();
    const url = location.pathname;

    return(
        <div className="addBlog">
            <h2>What do you want to do next? Delete it!</h2>
            <Link to ={`/delete${url}`}>
                <button type="button">Delete</button>
            </Link>   
        </div>
    )
};

export default AddBlogSection;