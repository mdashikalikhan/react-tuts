import { useNavigate, useParams } from "react-router-dom";
import useFetch from "./useFetch";

const BlogDetails = () => {
    const {id} = useParams();
    const {data:blog, pending, errorMessage} =  useFetch("http://localhost:8000/blogs/"+id);
    const navigate = useNavigate();
    
    const handleDelete = ()=>{
        fetch("http://localhost:8000/blogs/"+id,{
        method: "DELETE"
        }).then(resp=>{
            if(resp.ok){
                navigate('/');
            }
        });
    };

    
    
    return ( <div className="blog-details">
        {pending && <div>Loading....</div>}
        {errorMessage && <div> ${errorMessage} </div>}
        {blog &&
            <article>
                <h2>{blog.title}</h2>
                <p>Written by {blog.author}</p>
                <div>{blog.body}</div>
                <button onClick={handleDelete}>Delete</button>
            </article>
        }
        
    </div> );
}
 
export default BlogDetails;