import { useForm, type SubmitHandler } from "react-hook-form";
import {
  Button,
  ErrorMessage,
  Input,
  Modal,
  Textarea,
} from "../../Components/ui";
import type { PostDataType } from "../../types";
import { yupResolver } from "@hookform/resolvers/yup";
import { PostValidation } from "../../validation/validation";

type UpdatePostModalType = {
  isOpenEditPostModal: boolean;
  onCloseEditPostModal: () => void;
};
export const UpdatePostModal = ({
  isOpenEditPostModal,
  onCloseEditPostModal,
}: UpdatePostModalType) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<PostDataType>({
    resolver: yupResolver(PostValidation),
  });
  const onSubmit: SubmitHandler<PostDataType> = (data) => console.log(data);

  return (
    <Modal
      isOpen={isOpenEditPostModal}
      closeModal={onCloseEditPostModal}
      title="update Post"
    >
      <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col gap-2">
          <label className="text-sm font-medium text-gray-700" htmlFor="cover">
            Cover photo
          </label>
          <input
            {...register("image")}
            id="cover"
            type="file"
            className="p-4 rounded-md border-2 border-dashed border-indigo-300 focus:border-sky-400 focus:ring-0 text-gray-500 text-sm cursor-pointer file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-sky-100 file:text-sky-700 hover:file:bg-sky-200"
          />
          {errors?.image && <ErrorMessage msg={errors.image.message} />}
        </div>
        <div>
          <label className="text-[13px]" htmlFor="title">
            Title
          </label>
          <Input {...register("title")} />
          {errors?.title && <ErrorMessage msg={errors.title.message} />}
        </div>
        <div>
          <label className="text-[13px]" htmlFor="description">
            description
          </label>
          <Textarea {...register("description")} />
          {errors?.description && (
            <ErrorMessage msg={errors.description.message} />
          )}
        </div>
        <div className="flex gap-2 items-center">
          <Button
            type="submit"
            className="cursor-pointer rounded-md bg-sky-700 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:outline-none   hover:bg-sky-600 "
          >
            update
          </Button>
          <Button
            onClick={onCloseEditPostModal}
            className="cursor-pointer rounded-md bg-gray-500 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:outline-none  hover:bg-gray-300 "
          >
            cancel
          </Button>
        </div>
      </form>
    </Modal>
  );
};
