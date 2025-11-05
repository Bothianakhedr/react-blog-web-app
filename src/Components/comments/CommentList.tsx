import { AiOutlineLike } from "react-icons/ai";
import { FaRegEdit } from "react-icons/fa";
import { FaRegComment } from "react-icons/fa6";
import { MdDeleteForever } from "react-icons/md";
import Swal from "sweetalert2";

export const CommentList = () => {
  // handlers
  const handleDeleteComment = () => {
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
  return (
    <div className="mt-5 px-8 space-y-6 ">
      <div className="bg-gray-50 rounded-md p-4">
        <h3 className="userName mb-3">Bothiana</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
          consectetur fugit nemo explicabo mollitia ratione omnis quisquam
          veritatis. Quam alias itaque consequatur, aliquid natus architecto
          totam eum nulla dolor enim.
        </p>

        <div className="flex justify-between items-center">
          <div className="flex gap-4   mt-2">
            <AiOutlineLike className="cursor-pointer text-xl" />
            <FaRegComment className="cursor-pointer text-xl" />
            <span className="text-sm">2 hours</span>
          </div>
          <div className="flex mt-4 justify-center gap-1 items-center  text-gray-500  ">
            <FaRegEdit className="  cursor-pointer hover:scale-105 transition-transform" />
            <MdDeleteForever
              onClick={handleDeleteComment}
              className="  cursor-pointer hover:scale-105 transition-transform"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
