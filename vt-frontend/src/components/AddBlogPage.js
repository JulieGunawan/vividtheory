import React, {useState} from 'react';


const AddBlogPage = () => {

    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [image, setImage] = useState('');

    const handleSubmit = (e)=>{
        e.preventDefault();    
        alert("Your blog has been added");
        setTitle('');
        setContent('');
        setImage('');
    }

    return (
        <div className="addBlog">
            <h2>My New Blog</h2>
            <form onSubmit={handleSubmit}>
                <table>
                <tr>
                    <td>
                        <label>Title:</label></td>
                    <td>    
                        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
                    </td>
                </tr>
                <tr>
                    <td>
                        <label>Content:</label>
                    </td>
                    <td>
                        <textarea value={content} onChange={(e) => setContent(e.target.value)} />
                    </td>
                </tr>
                <tr>
                    <td><label>Image URL:</label></td>
                    <td>
                    <input type="text" size="40" value={image} onChange={(e) => setImage(e.target.value)} />
                    </td>
               
                </tr>
                </table>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
};

export default AddBlogPage;

