import { Pagination, PostCard } from "../Components/ui";
import { mockPosts } from "../data";
import { Link, useLocation } from "react-router-dom";
import { useScrollToTop } from "../hooks/useScrollToTop";

export const Posts = () => {
  const location = useLocation();
  const URLSearchParam = new URLSearchParams(location.search);
  const category = URLSearchParam.get("category");

  const filteredPosts = category
    ? mockPosts.filter((post) => post.category === category)
    : mockPosts;

  useScrollToTop();
 

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
          {filteredPosts.map((post) => (
            <div key={post.id} className="h-full">
              <PostCard post={post} />
            </div>
          ))}
        </div>

        <Pagination />
      </div>
    </section>
  );
};
