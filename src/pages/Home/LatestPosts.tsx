import { PostCard } from "../../Components/ui";
import { mockPosts } from "../../data";

export const LatestPosts = () => {
  return (
    <div className="post-list flex-9 mx-3 lg:mx-0 mt-9 grid gap-5 md:grid-cols-2 ">
      {mockPosts.slice(0, 4).map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
};
