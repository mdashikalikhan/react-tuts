
import './App.css';

export default function App() {
  const  title = "Welcome to React blogs";
  const likes = 50;

  const person = {name:"MD ASHIK ALI KHAN", age:43};

  const link = "http://www.google.com";

  return (
    <div className="App">
     <div className="content">
      <h1>{title}</h1>
      <p>Liked {likes} times</p>
      {/* <p>{person}</p> */}
      <p>{Math.random()*1000}</p>
      <a href={link}>Google</a>
     </div>
    </div>
  );
}


