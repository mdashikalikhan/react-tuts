
import { useState, useEffect } from "react";
import BlogList from "./BlockList";

const Home = () => {

    const title = "Welcome to React blogs";
    const likes = 50;

    const [randVal, setValue] =  useState(Math.random() * 1000);

    const [blogs, setBlogs] = useState([
        { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },

        { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },

        { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'Ashik', id: 3 },

        { title: 'Back end dev tips', body: 'lorem ipsum...', author: 'Ashik', id: 4 }

    ]);

    const person = { name: "MD ASHIK ALI KHAN", age: 43 };

    const link = "http://www.google.com";
    const handleClick = (e)=>{
        setValue(Math.random() * 1000);
    };

    const handleAnotherClick = (name, e)=>{
        console.log(`Hello, React Learners${name}`);
        
    };

    function handleDelete(id){
        const newBlogs = blogs.filter((blog)=>blog.id!==id);

        setBlogs(newBlogs);
    }

    useEffect(()=>{
        console.log('Render change');
    }, [randVal]);

    return (<div className="home">
        <h1>{title}</h1>
        <p>Liked {likes} times</p>

        <p>{randVal}</p>
        <a href={link}>Google</a>
        <h2>Home Page</h2>
        <button onClick={handleClick}>Change Value</button>
        <button onClick={()=>handleAnotherClick('ASHIK')}>Again Click me</button>

        <BlogList blogs={blogs} title="All Blogs!" handleDelete={handleDelete}/>

        <BlogList blogs={blogs.filter((blog)=>blog.author==='Ashik')} title="Ashik's Blogs!"
            handleDelete={handleDelete}/>
        
    </div>);
}

export default Home;