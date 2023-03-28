import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main/Main";
import About from "../../Pages/About/About";
import Home from "../../Pages/Home/Home";
import Media from "../../Pages/Media/Media";
import Signup from "../../Pages/Register/Signup/Signup";

export const router=createBrowserRouter([
    {path:'/',
    element:<Main/>,
    children:[
        {
            path:'/',
            element:<Home/>
        },
        {
            path:'/about',
            element:<About/>
        },
        {
            path:'/media',
            element:<Media/>
        },
        {
            path:'/signup',
            element:<Signup/>
        }
    ]
}
])