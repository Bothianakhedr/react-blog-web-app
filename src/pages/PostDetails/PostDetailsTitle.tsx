import { motion } from "framer-motion";
import { FaRegEdit } from "react-icons/fa";
// import { FaRegEdit } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import Swal from "sweetalert2";

type PostDetailsTitleType = {
  id?: number;
  title: string;
  author: string;
  onOpenEditPostModal: () => void;
};
export const PostDetailsTitle = ({ title, author ,onOpenEditPostModal }: PostDetailsTitleType) => {
  // handlers
  const handleDeletePost = () => {
    Swal.fire({
      title: "Are you sure you want to delete this post?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        // Call api
        Swal.fire({
          title: "Deleted!",
          text: "Your post has been deleted.",
          icon: "success",
        });
      }
    });
  };
  return (
    <motion.div
      className="text-center md:text-left mt-3 col-span-7"
      initial={{ x: 200, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
    >
      <h2 className="font-semibold my-1 text-xl">{title}</h2>
      <h5 className="font-semibold md:font-medium text-[14px] my-2">
        created By:{" "}
        <span className="text-indigo-600 md:text-[13px]">{author}</span>
      </h5>
      <div className="flex mt-4  gap-4 items-center ">
        <FaRegEdit
            onClick={() => onOpenEditPostModal()}
            className="text-3xl text-blue-700  cursor-pointer hover:scale-105 transition-transform"
          />
        <MdDeleteForever
          onClick={handleDeletePost}
          className="text-3xl text-red-700 cursor-pointer hover:scale-105 transition-transform"
        />
      </div>
    </motion.div>
  );
};

