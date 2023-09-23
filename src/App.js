import {createBrowserRouter,RouterProvider, Outlet} from "react-router-dom" //React-router-dom allows me to make routes to other pages. 
import './App.css';
import Register from "./pages/Register";
import Login from "./pages/Login";
import Write from "./pages/Write";
import Home from "./pages/Home";
import Single from "./pages/Single";
import Navbar  from "./components/Navbar";
import Footer from "./components/Footer";


// this Layout functions is a outlet that allow to simplify the routes allowing me to render the child route while having the navbar and footer available. 
const Layout = () => {
  return(
    <>
    <Navbar/>
    <Outlet/>
    <Footer/>
    </>
  )
}
const router = createBrowserRouter([
  {
      path:"/",
      element: <Layout/>,
      children:[
        {
          path:"/",
          element:<Home/>
        },
        {
          path:"/write",
          element:<Write/>
        },
        {
          path:"/post/:id",
          element:<Single/>
        },
      ]
  },
  {path: "/register",
element:<Register/>,
},
{path: "/login",
element:<Login/>,
},
]);


function App() {

  return (
    <div className="App">
         <RouterProvider router={router}/>  {/*This Allows for renderind the different pages from one area.*/}
    </div>
  );
}

export default App;
