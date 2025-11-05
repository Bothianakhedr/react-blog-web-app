import { Link } from "react-router-dom";
import Img from "../../assets/image/photo-1488190211105-8b0e65b80b4e.avif";
import type { PostCardData } from "../../types";

export const PostCard = ({ post } :PostCardData) => {
  const { title, author,id, createdAt, content } = post;

  return (
    <div className="post-card shadow-md rounded-md">
      <div className="image overflow-hidden">
        <img src={Img} alt={title} className="w-full rounded-md" />
      </div>
      <div className="content p-3">
        <div className="flex justify-between items-center my-2 border-b border-indigo-300">
          <p className="text-indigo-600 font-semibold text-[15px]">
            Author :
            <Link to={`/profile/${id}`} className="text-black">
              {author}
            </Link>
          </p>
          <span className="text-indigo-600  text-[13px]">
            {new Date(createdAt).toDateString()}
          </span>
        </div>

        <h3 className="font-semibold my-1">{title}</h3>
        {/* <Link to="">{category}</Link> */}
        <p className="  line-clamp-2 text-[15px] text-gray-500 ">
          {content}
        </p>
        <Link
          className="bg-indigo-600 hover:bg-indigo-400 transition-all text-white rounded-md p-2 mt-3 inline-block"
          to={`/post/${id}`}
        >
          Read More
        </Link>
      </div>
    </div>
  );
};
