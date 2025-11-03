import { Link } from "react-router-dom";
import homeBg from "../assets/image/photo-1488190211105-8b0e65b80b4e.avif";
import {PostCard} from "../Components/PostCard";
import { posts } from "../data";
const Home = () => {
  return (
    <section className="mt-14">
      <header
        style={{ backgroundImage: `url(${homeBg})` }}
        className="bg-no-repeat bg-cover h-[700px]"
      ></header>

      <main className="latest-post-section my-15">
        <div className="container mx-auto">
          <div className="flex justify-between items-center mx-3 lg:mx-0">
            <h2 className="border-b-2 border-indigo-300 font-semibold text-3xl  w-fit">
              Latest post
            </h2>
            <Link
              to="/posts"
              className="rounded-md  outline-2 p-2 text-[14px]  outline-indigo-300  hover:outline-indigo-600 transition-all"
            >
              view all posts ➡
            </Link>
          </div>

          <div className="posts-container mx-3 lg:mx-0 mt-9 grid gap-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
            {posts.slice(0, 4).map((post, index) => (
              <PostCard key={index} post={post} />
            ))}
          </div>
        </div>
      </main>
    </section>
  );
};

export default Home;
