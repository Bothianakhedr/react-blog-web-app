import { createBrowserRouter } from "react-router-dom";
import Layout from "../Components/Layout";
import Home from "../pages/Home";
import AddBlog from "../pages/AddBlog";
import PostDetails from "../pages/PostDetails";
import PageNotFound from "../pages/PageNotFound";
import Login from "../pages/Login";
import Register from "../pages/Register";

 export const router = createBrowserRouter([
    {path:"/", element:<Layout/> , children:[
        {index:true , element:<Home/>},
        {path:`post/:id`, element:<PostDetails/>},
        {path:"addBlog" , element:<AddBlog/>},
        {path:"login" , element:<Login/>},
        {path:"register" , element:<Register/>},
    ] },
    {path:"*" ,element:<PageNotFound/>}
])
