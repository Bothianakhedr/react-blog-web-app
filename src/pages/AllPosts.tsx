import { useEffect } from "react"
import Pagination from "../Components/Pagination"
import PostCard from "../Components/PostCard"
import { posts } from "../data"

 export const Posts = () => {
  useEffect(()=>{
    window.scrollTo(0,0)
  }, [])
  return (
    <section className="mt-20">
      <div className="container mx-auto">
        <div className="mx-3 lg:mx-0 mt-9 grid gap-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
        {posts.map((post,index) => <PostCard post={post} key={index}/>)}
        </div>
        <Pagination/>
      </div>
      
    </section>
  )
}

