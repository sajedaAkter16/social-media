import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main/Main";
import About from "../../Pages/About/About";
import Home from "../../Pages/Home/Home";
import Media from "../../Pages/Media/Media";
import Login from "../../Pages/Register/LOgin/Login";
import Signup from "../../Pages/Register/Signup/Signup";
import Details from "../../Pages/Media/PostDetails/Details";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import PostBanner from "../../Pages/Home/Post/PostBanner/PostBanner";
import UpdateModal from "../../Pages/About/Profile/UpdateModal/UpdateModal";
import Profile from "../../Pages/About/Profile/Profile";

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
        path:'/',
        element:<PrivateRoute><PostBanner/></PrivateRoute>
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
        path:'/update/:id',
        element:<UpdateModal/>,
        loader:({params})=>fetch(`http://localhost:5000/users/${params.id}`)
      },
      {
        path: "/login",
        element: <Login />,
      },
      // {
      //   path:'/update',
      //   element:<UpdateModal/>
      // },
      {
        path:'/details/:id',
        element:<PrivateRoute><Details/></PrivateRoute>,
        loader:({params})=>fetch(`http://localhost:5000/posts/${params.id}`)
      }
    ],
  },
]);
