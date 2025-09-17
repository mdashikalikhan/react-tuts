
import './App.css';
import BlogDetails from './BlogDetails';
import Create from './Create';
import Home from './Home';
import Navbar from './Navbar';
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import NotFound from './NotFound';
import About from './About';
import HelpLayout from './HelpLayout';


const RootLayout = () => {
  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <Outlet />
      </div>
    </div>
  );
}

const router = createBrowserRouter(
  [{
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: "create",
        element: <Create />
      },
      {
        path: "blogs/:id",
        element: <BlogDetails />
      },
      {
        path: "about",
        element: <About />
      },
      {
        path: "*",
        element: <NotFound />
      },
      {
        path: "/help",
        element: <HelpLayout/>
      }
    ]
  }
  ]

);

export default function App() {


  return (
    // <Router>
    //   <div className="App">
    //     <Navbar />
    //     <div className="content">
    //       <Routes>
    //         <Route path='/'  element={<Home/>}/> 
    //         <Route path='/create' element={<Create/>} /> 
    //         <Route path='/blogs/:id' element={<BlogDetails/>}/>
    //         <Route path='/about' element={<About/>}/>
    //         <Route path='*' element={<NotFound/>}/>
    //       </Routes>
    //     </div>
    //   </div>
    // </Router>
    <RouterProvider router={router}/>
  );
}


