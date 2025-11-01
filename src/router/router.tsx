import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import PostDetails from "../pages/PostDetails";
import PageNotFound from "../pages/PageNotFound";
import Login from "../pages/Login";
import {Register} from "../pages/Register";
import { Layout } from "../Components/Layout";
import ForgetPassword from "../pages/ForgotPassword";
import { ChangePassword } from "../pages/ChangePassword";
import { CreatePost } from "../pages/CreatePost";
import { Posts } from "../pages/AllPosts";

 export const router = createBrowserRouter([
    {path:"/", element:<Layout/> , children:[
        {index:true , element:<Home/>},
        {path:`post/:id`, element:<PostDetails/>},
        {path:"createPost" , element:<CreatePost/>},
        {path:"posts" , element:<Posts/>},
       
    ] },
     {path:"login" , element:<Login/>},
        {path:"register" , element:<Register/>},
        {path:"forgotPassword" , element:<ForgetPassword/>},
        {path:"changePassword" , element:<ChangePassword/>},
    {path:"*" ,element:<PageNotFound/>}
])
