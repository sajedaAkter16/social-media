import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main/Main";
import About from "../../Pages/About/About";
import Home from "../../Pages/Home/Home";
import Media from "../../Pages/Media/Media";
import Login from "../../Pages/Register/LOgin/Login";
import Signup from "../../Pages/Register/Signup/Signup";
import Details from "../../Pages/Media/PostDetails/Details";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/media",
        element: <Media />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path:'/details/:id',
        element:<Details/>,
        loader:({params})=>fetch(`http://localhost:5000/posts/${params.id}`)
      }
    ],
  },
]);
