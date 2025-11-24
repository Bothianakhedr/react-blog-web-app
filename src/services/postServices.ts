import { toast } from "react-toastify";
import { axiosInstance } from "../config/axiosConfig";
import type { AxiosError } from "axios";
import type { ErrorResponseType } from "../types";
import type {
  CreatePostParams,
  deletePostParams,
  GetAllPostsParams,
  getSinglePostParams,
} from "./ServicesType";

export const createPost = async ({
  formData,
  navigate,
  setIsLoading,
}: CreatePostParams) => {
  try {
    const { data } = await axiosInstance.post("/api/v1/blogs", formData);
    if (data.status == "success") {
      toast.success(data.message, {
        autoClose: 1000,
      });
      setTimeout(() => {
        navigate("/");
      }, 2000);
    }
  } catch (error) {
    const errorObj = error as AxiosError<ErrorResponseType>;
    toast.error(errorObj.response?.data.message);
  } finally {
    setIsLoading(false);
  }
};

export const getAllPosts = async ({ setPosts }: GetAllPostsParams) => {
  try {
    const { data } = await axiosInstance.get("api/v1/blogs");
    setPosts(data.data.blogs);
    console.log(data.data.blogs);
  } catch (error) {
    const errorObj = error as AxiosError<ErrorResponseType>;
    toast.error(errorObj.response?.data.message);
  }
};

export const getSinglePost = async ({ setPost, slug }: getSinglePostParams) => {
  try {
    const { data } = await axiosInstance.get(`/api/v1/blogs/${slug}`);
    setPost(data.data.blog);
  } catch (error) {
    const errorObj = error as AxiosError<ErrorResponseType>;
    toast.error(errorObj.response?.data.message);
  }
};

export const deletePost = async ({ id, navigate }: deletePostParams) => {
  try {
    const { data } = await axiosInstance.delete(`/api/v1/blogs/${id}`);

    if (data.status == "success") {
      navigate("/");
    }
  } catch (error) {
    const errorObj = error as AxiosError<ErrorResponseType>;
    toast.error(errorObj.response?.data.message);
  }
};
