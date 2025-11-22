import { toast } from "react-toastify";
import { axiosInstance } from "../config/axiosConfig";
import type { AxiosError } from "axios";
import type { ErrorResponseType } from "../types";
import type { CreatePostParams, GetAllPostsParams } from "./ServicesType";

export const createPost = async ({
  formData,
  token,
  navigate,
  setIsLoading,
}: CreatePostParams) => {
  try {
    const { data } = await axiosInstance.post("/api/v1/blogs", formData, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "multipart/form-data",
      },
    });
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
