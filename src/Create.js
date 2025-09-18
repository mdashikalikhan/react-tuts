import { useState } from "react";
import { useNavigate } from "react-router-dom";



const Create = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('');
    const [isPending, setIsPending] = useState(false);

    const navigate = useNavigate();

    const handleSubmit = (e)=>{
        e.preventDefault();
        const blog = {title, body, author};

        //console.log(blog);
        setIsPending(true);
        setTimeout(() => {
            fetch('http://localhost:8000/blogs', {
                headers: { 'Content-Type': 'application/json' },
                method: 'POST',
                body: JSON.stringify(blog)

            }).then((res) => {
                if(res.ok && res.status===201){
                    navigate('/');
                }
                //console.log(res);

            }).catch(err => {
                console.log(err.message);
            }).finally(() => setIsPending(false))
        }, 1000);
    }

    return ( 
        <div className="create">
            <h2>Add a new blog</h2>
            <form onSubmit={handleSubmit}>
                <label>Blog title:</label>
                <input type="text" required value={title} onChange={(e)=>setTitle(e.target.value)}/>
                <label>Blog body:</label>
                <textarea required value={body} onChange={(e)=> setBody(e.target.value)}></textarea>
                <label>Blog Author:</label>
                <select required value={author} onChange={(e)=>setAuthor(e.target.value)}>
                    <option value=''></option>
                    <option value="mario">mario</option>
                    <option value="yoshi">yoshi</option>
                    <option value="Ashik">Ashik</option>
                </select>
                {!isPending && <button>Add Blog</button>}
                {isPending && <button disabled>Adding Blog...</button>}
                <p>{title}</p>
                <p>{body}</p>
                <p>{author}</p>
            </form>
        </div>
     );
}
 
export default Create;