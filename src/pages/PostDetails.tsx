import { AddComments, CommentList } from "../Components/comments";
import { Link, useParams } from "react-router-dom";
import { SlDislike } from "react-icons/sl";
import { SlLike } from "react-icons/sl";
import { MdDeleteForever } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";
import Img from "../assets/image/bg.jpg";
import { motion } from "framer-motion";
import { posts } from "../data";
import { useEffect } from "react";
import Swal from 'sweetalert2';



export const PostDetails = () => {
  const { id } = useParams();
  const post = posts.find((post) => post.id == Number(id));
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  if (!post) {
    return <h2 className="text-center mt-20">Post Not Found</h2>;
  }
  const { title, author, likes } = post;



  // handlers
  const handleDeletePost =()=>{
    Swal.fire({
  title: "Are you sure?",
  text: "You won't be able to revert this!",
  icon: "warning",
  showCancelButton: true,
  confirmButtonColor: "#3085d6",
  cancelButtonColor: "#d33",
  confirmButtonText: "Yes, delete it!"
}).then((result) => {
  if (result.isConfirmed) {
    Swal.fire({
      title: "Deleted!",
      text: "Your file has been deleted.",
      icon: "success"
    });
  }
});
  }
  return (
    <section className="my-20 px-8">
      <div className="container mx-auto px-8">
        <div className="md:grid md:grid-cols-12 gap-8 ">
          <div className="image col-span-5">
            <motion.img
              src={Img}
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
          </motion.div>
        </div>

        <motion.p
          className="text-[15px]  text-center md:text-left md:mt-5"
          initial={{ y: 200, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
        >
          Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          Exercitationem laudantium error, harum, cumque labore aspernatur
          praesentium suscipit officiis similique repudiandae expedita
          blanditiis officia eaque animi ratione provident ad incidunt ullam
          illum quaerat molestiae. Ullam deserunt non dolorem magni vero, soluta
          corrupti cupiditate nisi omnis autem id nesciunt dolores veniam
          voluptates officia mollitia sed, in, alias doloremque atque officiis?
          Vitae perspiciatis magni esse! Numquam corporis at sint libero
          accusamus consequatur enim impedit laborum illo ut! Minus consequatur
          ut harum dignissimos vel, sed architecto reiciendis, alias delectus
          cum quia deserunt aspernatur similique facere eos deleniti velit eum
          voluptatibus autem nemo non accusamus fugiat. Error voluptatibus
          doloremque, officia eligendi assumenda quaerat facilis laboriosam
          culpa nulla amet. Quis quos omnis dolorem voluptas repellendus
          voluptatem obcaecati temporibus odio impedit quod error dignissimos
          tempore doloremque incidunt odit enim, dolore ad voluptates, natus sit
          beatae. Odio harum, magni id unde necessitatibus doloribus maxime quis
          quae esse error voluptatem nulla blanditiis nobis rerum facere ab
          eaque sint corporis sequi repellat facilis. Sunt deserunt ad maiores
          numquam consequuntur! Quo sunt, doloribus a quia ipsum fuga voluptate
          veritatis expedita est dolores, itaque vel saepe perspiciatis placeat
          sint sit optio laudantium possimus assumenda recusandae sequi tempora
          minima in? Quos, voluptatem magni!
        </motion.p>
      </div>
      <div className="md:flex justify-between mt-3 items-center px-8 ">
        <div className="likes-icon flex gap-3 items-center justify-center mt-5">
          <SlLike className="text-2xl cursor-pointer text-blue-700 hover:rotate-6 transition-transform" />
          <small>{likes}</small>
          <SlDislike className="text-2xl cursor-pointer" />
        </div>

        <div className="flex mt-4 justify-center gap-3 items-center   ">
          <FaRegEdit className="text-3xl text-blue-700  cursor-pointer hover:scale-105 transition-transform" />
          <MdDeleteForever onClick={handleDeletePost} className="text-3xl text-red-700 cursor-pointer hover:scale-105 transition-transform" />
        </div>


      </div>
<AddComments/>
      <CommentList/>


    </section>
  );
};
