import { Pagination, PostCard } from "../Components/ui";
import { Link } from "react-router-dom";
import { useScrollToTop } from "../hooks/useScrollToTop";
import { useEffect, useState } from "react";
import { getAllPosts } from "../services/postServices";
import type { PostType } from "./Home/HomeTypes";
import Skeleton from "./Home/Components/Skeleton";

export const Posts = () => {
    const [posts, setPosts] = useState<PostType[]>([]);
  

  

  useScrollToTop();
  useEffect(()=>{
    getAllPosts({setPosts})
  },[])
 

  return (
    <section className="mt-20">
      <div className="container mx-auto px-4 lg:px-0 ">
        <div className="flex justify-between items-center my-10  ">
          <h2 className="border-b-2 border-indigo-300 font-semibold text-3xl  w-fit">
            All Posts
          </h2>
          <Link
            to="/allPosts"
            className="rounded-md outline-2 p-2 text-sm outline-indigo-300 hover:outline-indigo-600 transition-colors"
          >
            View All
          </Link>
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {posts.length ? (
        posts.map((post:PostType) => <PostCard post={post} key={post._id} />)
      ) : (

<>
{Array.from({length:6} , (_ , index) => <Skeleton key={index}/>)}
</>)}
        </div>

        <Pagination />
      </div>
    </section>
  );
};
