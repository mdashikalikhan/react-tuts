
import { useState } from "react";

const Home = () => {

    const title = "Welcome to React blogs";
    const likes = 50;

    const [randVal, setValue] =  useState(Math.random() * 1000);

    const person = { name: "MD ASHIK ALI KHAN", age: 43 };

    const link = "http://www.google.com";
    const handleClick = (e)=>{
        setValue(Math.random() * 1000);
    };

    const handleAnotherClick = (name, e)=>{
        console.log(`Hello, React Learners${name}`);
        
    };

    return (<div className="home">
        <h1>{title}</h1>
        <p>Liked {likes} times</p>

        <p>{randVal}</p>
        <a href={link}>Google</a>
        <h2>Home Page</h2>
        <button onClick={handleClick}>Change Value</button>
        <button onClick={()=>handleAnotherClick('ASHIK')}>Again Click me</button>
        
    </div>);
}

export default Home;