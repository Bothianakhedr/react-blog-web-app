export type PostType = {
  title: string;
  excerpt: string;
  createdAt: string;
  author: string;
  _id: string;
  category?: string;
  image: string;
  slug:string
};




export type PostCardData = {
  post: PostType
};

