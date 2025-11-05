import { Pagination, PostCard } from "../Components/ui";
import { useEffect } from "react";
import { posts } from "../data";

export const Posts = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <section className="mt-20">
      <div className="container mx-auto">
        <h2 className="text-2xl font-semibold mb-6 border-b border-indigo-500 w-fit">
          All Posts
        </h2>

        <div className="mx-3 lg:mx-0 mt-9 grid gap-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
          {posts.map((post, index) => (
            <PostCard post={post} key={index} />
          ))}
        </div>
        <Pagination />
      </div>
    </section>
  );
};
