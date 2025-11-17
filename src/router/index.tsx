import { createBrowserRouter } from "react-router-dom";
import {
  ChangePassword,
  ForgotPassword,
  Login,
  Register,
} from "../pages/account";

import { Layout } from "../Components/Layout";
import {
  CreatePost,
  Home,
  PageNotFound,
  PostDetails,
  Posts,
  Profile,
} from "../pages";
import { ContactUs } from "../pages/ContactUs";
import { ProtectedRoute } from "../Components/auth/ProtectedRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <ProtectedRoute>
        <Layout />
      </ProtectedRoute>
    ),
    children: [
      { index: true, element: <Home /> },
      { path: `post/:id`, element: <PostDetails /> },
      { path: "createPost", element: <CreatePost /> },
      { path: "allPosts", element: <Posts /> },
      { path: "contact", element: <ContactUs /> },
      { path: `profile`, element: <Profile /> },
      { path: `profile/:id`, element: <Profile /> },
    ],
  },
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "login", element: <Login /> },
      { path: "register", element: <Register /> },
    ],
  },
  { path: "forgotPassword", element: <ForgotPassword /> },
  { path: "changePassword", element: <ChangePassword /> },
  { path: "*", element: <PageNotFound /> },
]);
