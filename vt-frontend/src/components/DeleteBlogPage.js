import React, {useState,useEffect} from 'react';
import { useParams} from 'react-router-dom';
import Dialog from './Dialog';
import Header from './Header';

const DeleteBlogPage = () => {
    const [article, setArticle]=useState([]);
    const {slug} = useParams();
    // const [showConfirmation, setShowConfirmation] = useState(false);
    const [dialog, setDialog] = useState({
        message:"",
        isLoading: false
    });
    const [empty, setEmpty] = useState(false);

    const renderBlog = async () => {
        try{
            console.log(slug);
            const response = await fetch(`http://localhost:5000/blogs/${slug}`);
            const data = await response.json();
            console.log(data);
            setArticle(data);
        } catch(error) {
            console.log(error.message);
        }
    }

    const removeBlog = async (id) => {
        try{
            await fetch(`http://localhost:5000/blogs/${id}`, {
                method: "DELETE",
            });
            setArticle([]);
        } catch(error){
            console.log(error.message);
        }       
    }

    useEffect(()=>{
        renderBlog();
    },[dialog])

    const handleDialog = (message, isLoading) =>{
        setDialog({message, isLoading});
    }

    const handleDelete = () =>{
        handleDialog("Are you sure you want to delete this post?", true);
        setEmpty(true);
    }

    const areYouSureDelete = (selected) =>{
        if (selected){
            handleDialog("", false);
            removeBlog(article.id);
        } else {
            handleDialog("", false);
        }
    }

    if (!article) {
        console.log("article not found");
        return <div>
                    <Header />
                    <p>Post not found</p>
                </div>;
    } 
    
    return(
        <div>
            <Header />
            <div className='deletePost'>
                <h1>{article.title}</h1>
                {article.content}
                <button onClick={handleDelete}>
                    {empty ? "Click logo to go back" : "Delete"}</button>
            </div>
            {dialog.isLoading && (
                <Dialog
                    message={dialog.message}
                    onConfirm={areYouSureDelete} />
            )}
        </div>
    )
    
}

export default DeleteBlogPage;