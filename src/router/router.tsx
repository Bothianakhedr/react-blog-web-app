import { createBrowserRouter } from "react-router-dom";
import {
  ChangePassword,
  CreatePost,
  ForgotPassword,
  Home,
  Login,
  PageNotFound,
  PostDetails,
  Posts,
  Profile,
  Register,
} from "../pages";

import { Layout } from "../Components/Layout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: `post/:id`, element: <PostDetails /> },
      { path: "createPost", element: <CreatePost /> },
      { path: "posts", element: <Posts /> },
      { path: `profile`, element: <Profile /> },
      { path: `profile/:id`, element: <Profile /> },
    ],
  },
  { path: "login", element: <Login /> },
  { path: "register", element: <Register /> },
  { path: "forgotPassword", element: <ForgotPassword /> },
  { path: "changePassword", element: <ChangePassword /> },
  { path: "*", element: <PageNotFound /> },
]);
