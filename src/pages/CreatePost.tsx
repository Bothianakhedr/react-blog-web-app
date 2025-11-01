import Img from "../assets/image/photo-1488190211105-8b0e65b80b4e.avif";
import { Button } from "../Components/ui/Button";
import { Input } from "../Components/ui/Input";

export const CreatePost = () => {
  return (
    <section className=" mt-20">
      <div className="container mx-auto px-4">
        <h2 className="font-semibold text-7xl">
          Add <span className="text-sky-500 ">Blog</span>
        </h2>

        <div className="grid md:grid-cols-2 my-10 gap-12 ">
          <div className="image ">
            <img src={Img} alt="" className="-w-[600px] shadow-xl rounded-2xl " />
          </div>
          <div className="form  md:mt-6">
            <form className="space-y-2.5">
                <div className="flex flex-col gap-2">
                <label className="text-sm font-medium text-gray-600" htmlFor="cover">
                  Cover photo
                </label>
                <input
                  id="cover"
                  type="file"
                  className="p-4 rounded-md border-2 border-dashed border-indigo-300 focus:border-sky-400 focus:ring-0 text-gray-500 text-sm cursor-pointer file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-sky-100 file:text-sky-700 hover:file:bg-sky-200"
                />
              </div>
              <div>
                <label className="text-[13px]" htmlFor="title">
                  Title
                </label>
                <Input placeholder="My Blog" />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-[13px]" htmlFor="description">
                  Description
                </label>

                <textarea
                  className="p-2 rounded-md border-2  border-gray-300   focus:outline-sky-300 focus:ring-1 focus:ring-sky-300 focus:border-sky-300   "
                  placeholder="Type description"
                ></textarea>
              </div>

              <Button>Add</Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
