import * as yup from "yup";

// register
export const registerFormValidation = yup.object({
  name: yup
    .string()
    .required("userName is required!")
    .min(6, "userName must be at least 6 character"),
  email: yup.string().required("email is required!").email("invalid email"),
  password: yup
    .string()
    .required("password is required!")
    .min(6, "password must be at least 6 character"),
});
export const loginFormValidation = yup.object({
  email: yup.string().required("email is required!").email("invalid email"),
  password: yup
    .string()
    .required("password is required!")
    .min(6, "password must be at least 6 character"),
});

// create post

export const PostValidation = yup.object({
  image: yup
    .mixed<FileList>()
    .required( "image is required!"),

  title: yup
    .string()
    .required("title is required")
    .min(6, "title must be at least 6 characters"),

  content: yup
    .string()
    .required("content is required")
    .min(10, "content must be at least 10 characters"),
});

