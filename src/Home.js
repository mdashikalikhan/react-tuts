
const title = "Welcome to React blogs";
const likes = 50;

const person = { name: "MD ASHIK ALI KHAN", age: 43 };

const link = "http://www.google.com";

const Home = () => {

    const hangleClick = (e)=>{
        console.log(`Hello, React Learners${e}`);
    };

    return (<div className="home">
        <h1>{title}</h1>
        <p>Liked {likes} times</p>

        <p>{Math.random() * 1000}</p>
        <a href={link}>Google</a>
        <h2>Home Page</h2>
        <button onClick={hangleClick}>Click me</button>
        <button>Click me again</button>
    </div>);
}

export default Home;