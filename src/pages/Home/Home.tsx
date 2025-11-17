import { Link } from "react-router-dom";
import { Categories, HomeHeader, LatestPosts } from "./";
// import axios from "axios"
// import { useEffect } from "react";
export const Home = () => {
//  async function getAllBlogs (){
//   const {data} = await axios.get("https://blog-app-amber-three.vercel.app/api/v1/blogs")
  

//   }
//   useEffect(()=>{
//     getAllBlogs()
//   },[])
  return (
    <section className="mt-14">
      <HomeHeader />
      <main className="latest-post-section my-16">
        <div className="container mx-auto px-4 lg:px-0">
          <div className="flex justify-between items-center ">
            <h2 className="border-b-2 border-indigo-300 font-semibold text-3xl  w-fit">
              Latest Posts
            </h2>
            <Link
              to="/allPosts"
              className="rounded-md outline-2 p-2 text-sm outline-indigo-300 hover:outline-indigo-600 transition-colors"
            >
              view all posts ➡
            </Link>
          </div>

          <div className="flex flex-col lg:flex-row gap-5">
            <LatestPosts />
            <Categories />
          </div>
        </div>
      </main>
    </section>
  );
};
