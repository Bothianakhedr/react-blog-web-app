import { Link } from "react-router-dom"
import { categories } from "../../data"

 export const Categories = () => {
  return (
<div className="flex-3 mt-12">
              <h5 className="text-center mb-9 mx-3 font-semibold text-2xl border-b-2 border-t-2 p-3 transition-colors text-indigo-600">
                CATEGORIES
              </h5>
              <div className="categoryLinks px-3">
                {categories.map((cat) => (
                  <Link
                  key={cat}
                    className="flex flex-col mb-5 items-center bg-indigo-300 rounded hover:bg-indigo-500 transition-colors p-2 justify-center"
                    to={`/allPosts?category=${cat}`}
                  >
                    {cat}
                  </Link>
                ))}
              </div>
            </div>  )
}

