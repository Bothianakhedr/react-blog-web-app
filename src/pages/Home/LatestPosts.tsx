import { useEffect, useState } from "react";
import Skeleton from "./Components/Skeleton";
import { PostCard } from "./Components/PostCard";
import type {  PostType } from "./HomeTypes";
import { getAllPosts } from "../../services/postServices";
export const LatestPosts = () => {
  const [posts, setPosts] = useState<PostType[]>([]);
 
  
  useEffect(() => {
    getAllPosts({setPosts});
  }, []);
  return (
    <div className="post-list flex-9 mx-3 lg:mx-0 mt-9 grid gap-5 md:grid-cols-2 ">
      {posts.length ? (
        posts.map((post:PostType) => <PostCard post={post} key={post._id} />)
      ) : (

<>
{Array.from({length:6} , (_ , index) => <Skeleton key={index}/>)}
</>)}
    </div>
  );
};
