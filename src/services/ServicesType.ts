import type { NavigateFunction } from "react-router-dom";
import type { PostDataType } from "../types";
import type { PostType } from "../pages/Home/HomeTypes";

export type CreatePostParams = {
  formData: PostDataType | FormData;
  token: string | null;
  navigate: NavigateFunction;
  setIsLoading: (val: boolean) => void;
};

export type GetAllPostsParams = {
  setPosts: React.Dispatch<React.SetStateAction<PostType[]>>;
};

export type getSinglePostParams = {
  setPost: React.Dispatch<React.SetStateAction<PostType | null>>;
  slug: string | undefined;
};
export type deletePostParams = {
  id:string
  navigate :NavigateFunction
 
};
