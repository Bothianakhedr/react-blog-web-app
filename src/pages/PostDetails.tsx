import { AddComments, CommentList } from "../Components/comments";
import { Link, useParams } from "react-router-dom";
import { SlDislike } from "react-icons/sl";
import { SlLike } from "react-icons/sl";
import { MdDeleteForever } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";
import { motion } from "framer-motion";
import { mockPosts } from "../data";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { useForm, type SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { BlogValidation } from "../validation/validation";
import type { BlogData } from "../types";
import { Button, ErrorMessage, Input, Modal, Textarea } from "../Components/ui";

export const PostDetails = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenCommentModal, setIsOpenCommentModal] = useState(false);
  const [commentText, setCommentText] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(BlogValidation),
  });
  const onSubmit: SubmitHandler<BlogData> = (data) => {
    console.log(data);
  };

  const { id } = useParams();
  const post = mockPosts.find((post) => post.id == Number(id));
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  if (!post) {
    return <h2 className="text-center mt-20">Post Not Found</h2>;
  }
  const { title, author, description ,image  } = post;

  // handlers
  const handleDeletePost = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success",
        });
      }
    });
  };
  function openModal(post: { title: string; content: string }) {
    setIsOpen(true);
    reset({
      title: post.title,
      description: post.content,
    });
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <section className="my-20  px-8 md:px-16">
      <div className="container mx-auto px-8">
        <div className="md:grid md:grid-cols-12 gap-8 ">
          <div className="image col-span-5">
            <motion.img
              src={image}
              alt={title}
              className="rounded-md shadow w-full"
              initial={{ x: -200, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            />
          </div>
          <motion.div
            className="text-center md:text-left mt-3 col-span-7"
            initial={{ x: 200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
          >
            <h2 className="font-semibold my-1 text-xl">{title}</h2>
            <h5 className="font-semibold md:font-medium text-[14px] my-2">
              createdBy:
              <Link
                to={`/profile/${id}`}
                className="text-indigo-600    md:text-[13px]"
              >
                {" "}
                {author}
              </Link>
            </h5>
            <div className="flex mt-4  gap-4 items-center ">
          <FaRegEdit
            onClick={() => openModal(post)}
            className="text-3xl text-blue-700  cursor-pointer hover:scale-105 transition-transform"
          />
          <MdDeleteForever
            onClick={handleDeletePost}
            className="text-3xl text-red-700 cursor-pointer hover:scale-105 transition-transform"
          />
        </div> 
          </motion.div>
        </div>

        <motion.p
          className="text-[15px] leading-8  text-center md:text-left md:mt-5"
          initial={{ y: 200, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
        >
          {description}
        </motion.p>
      </div>

      <div className="md:flex justify-between mt-3 items-center px-8  ">
        <div className="likes-icon flex gap-3 items-center justify-center mt-5 ">
          <SlLike className="text-2xl cursor-pointer text-blue-700 hover:rotate-6 transition-transform" />
          {/* <small>{likes}</small> */}
          <SlDislike className="text-2xl cursor-pointer" />
        </div>

        
      </div>

      <hr className="my-8 border-gray-300" />

      <AddComments />
      <CommentList onEditComment={() => setIsOpenCommentModal(true)} />

      {/* update Modal */}
      <Modal title="update Post" isOpen={isOpen} closeModal={closeModal}>
        <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col gap-2">
            <label
              className="text-sm font-medium text-gray-700"
              htmlFor="cover"
            >
              Cover photo
            </label>
            <input
              {...register("image")}
              id="cover"
              type="file"
              className="p-4 rounded-md border-2 border-dashed border-indigo-300 focus:border-sky-400 focus:ring-0 text-gray-500 text-sm cursor-pointer file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-sky-100 file:text-sky-700 hover:file:bg-sky-200"
            />
            {errors.image && <ErrorMessage msg={errors.image.message} />}
          </div>
          <div>
            <label className="text-[13px]" htmlFor="title">
              Title
            </label>
            <Input {...register("title")} />
            {errors.title && <ErrorMessage msg={errors.title.message} />}
          </div>
          <div>
            <label className="text-[13px]" htmlFor="description">
              description
            </label>
            <Textarea {...register("description")} rows={5} />
            {errors.description && (
              <ErrorMessage msg={errors.description.message} />
            )}
          </div>
          <div className="flex gap-2 items-center">
            <Button className="cursor-pointer rounded-md bg-sky-700 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:outline-none   hover:bg-sky-600 ">
              update
            </Button>
            <Button
              onClick={close}
              className="cursor-pointer rounded-md bg-gray-500 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:outline-none  hover:bg-gray-300 "
            >
              cancel
            </Button>
          </div>
        </form>
      </Modal>
      {/* update comment  */}
      <Modal
        title="update comment"
        isOpen={isOpenCommentModal}
        closeModal={() => setIsOpenCommentModal(false)}
      >
        <form className="space-y-4">
          <Input
            placeholder="update comment..."
            value={commentText}
            onChange={(e) => setCommentText(e.target.value)}
          />
          <Button>update</Button>
        </form>
      </Modal>
    </section>
  );
};
