import type { blogError, blogInfo } from "../types";

// create post
export const createBlogValidation = ({
  title,
  image,
  description,
}: blogInfo) => {
  const error :blogError = {};

  if (!title ||title.trim() == "") {
    error.title = "title is required!";
  }
  if (!description ||description.trim() == "") {
    error.description = "description is required!";
  }
  if (!image) {
    error.image = "image is required!";
  }

  return error;
};
