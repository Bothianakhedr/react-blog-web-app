import { Link } from "react-router-dom";
import Img from "../assets/image/bg.jpg";
const PostCard = ({ post }) => {
  const { title, author, createdAt, category, content } = post;
  return (
    <div className="post-card shadow-md rounded-md">
      <div className="image overflow-hidden">
        <img src={Img} alt="post" className="w-full rounded-md" />
      </div>
      <div className="content p-3">
        <div className="flex justify-between items-center my-2 border-b border-indigo-300">
          <p className="text-indigo-600 font-semibold text-[15px]">
            Author :<Link to={"/profile/1"} className="text-black"> {author}</Link>
          </p>
          <span className="text-indigo-600  text-[13px]">{new Date(createdAt).toDateString()}</span>
        </div>

        <h3 className="font-semibold my-1">{title}</h3>
        {/* <Link to="">{category}</Link> */}
        <p className=" line line-clamp-2 text-[15px] text-gray-400 ">{content}</p>
        <Link className="bg-indigo-600 hover:bg-indigo-400 transition-all text-white rounded-md p-2 mt-3 inline-block" to={`/post/:id`}>Read More</Link>
      </div>
    </div>
  );
};

export default PostCard;
