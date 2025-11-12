import Img from "../assets/image/bg.jpg";
import { Button, ErrorMessage, Input, Textarea } from "../Components/ui";
import { useForm, type SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import type { PostDataType } from "../types";
import { PostValidation } from "../validation/validation";


export const CreatePost = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<PostDataType>({
    resolver: yupResolver(PostValidation),
   
  });


  const onSubmit: SubmitHandler<PostDataType> = (data) => {
    const {title,description,image} =data;
    const formData = new FormData()
    formData.append("title" , title)
    formData.append("description" , description)
    formData.append("image" , image[0])
   
  
  }


  return (
    <section className=" mt-20 ">
      <div className="container mx-auto px-4 ">
        <h2 className="font-semibold text-7xl">
          Add <span className="text-sky-600 ">Post</span>
        </h2>

        <div className="grid md:grid-cols-2 my-10 gap-12 ">
          <div className="image  md:mt-20 lg:mt-0">
            <img
              src={Img}
              alt=""
              className="w-[600px] shadow-xl rounded-2xl object-cover "
            />
          </div>
          <div className="form  md:mt-6">
            <form className="space-y-2.5" onSubmit={handleSubmit(onSubmit)}>
              <div className="flex flex-col gap-2">
                <label
                  className="text-sm font-medium text-gray-600"
                  htmlFor="cover"
                >
                  Cover photo
                </label>
                <input
                  {...register("image")}
                  id="cover"
                  type="file"
                  className="p-4 rounded-md border-2 border-dashed border-indigo-300 focus:border-sky-400 focus:ring-0 text-gray-500 text-sm cursor-pointer file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-sky-100 file:text-sky-700 hover:file:bg-sky-200"
                />
                {errors.image && <ErrorMessage msg={errors.image.message} />}
              </div>

              <div>
                <label className="text-[13px]" htmlFor="title">
                  Title
                </label>
                <Input placeholder="My Blog" {...register("title")} />
                {errors.title && <ErrorMessage msg={errors.title.message} />}
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-[13px]" htmlFor="description">
                  Description
                </label>

                <Textarea
                  className="p-2 rounded-md border-2  border-gray-300   focus:outline-sky-300 focus:ring-1 focus:ring-sky-300 focus:border-sky-300   "
                  placeholder="Type description"
                  {...register("description")}
                  name="description"
                />
                {errors.description && (
                  <ErrorMessage msg={errors.description.message} />
                )}
              </div>

              <Button>Add Post</Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
