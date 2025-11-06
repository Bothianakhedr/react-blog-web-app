import Image from "../assets/image/download.jpg";
import { useState, type ChangeEvent, type FormEvent } from "react";
import { toast } from "react-toastify";
import { Posts } from "./AllPosts";
import Swal from "sweetalert2";
export const Profile = () => {
  const [file, setFile] = useState<File | null>(null);
  //  *handler
  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!file) return toast.warning("choose file please");
  };

  const onDeleteAccount = () => {
    Swal.fire({
      title: "Are you sure you want to delete your profile?",
      text: "You won't be able to revert this profile!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success",
        });
      }
    });
  };
  const onDeleteProfileImage = () => {
    Swal.fire({
      title: "Are you sure you want to delete your profile Image ?",
      text: "You won't be able to revert this profile Image!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success",
        });
      }
    });
  };

  return (
    <section className="my-20">
      <div className="container mx-auto px-4">
        <header className=" text-white md:flex gap-6 md:text-left p-5 text-center rounded-md bg-linear-to-r from-pink-400 via-indigo-500 to-teal-400">
          <div className="image-wrapper relative   ">
            <img
              src={file ? URL.createObjectURL(file) : Image}
              alt=""
              className="w-28 h-28 md:mx-0 mx-auto  object-cover rounded-full"
            />
            <form onSubmit={submitHandler}>
              {/* edit profile Image */}
              <div>
                <button
                  id="dropdownDefaultButton"
                  data-dropdown-toggle="dropdown"
                  className="text-black bg-white relative -top-5  font-medium rounded px-2 py-1 text-sm   text-center inline-flex items-center "
                  type="button"
                >
                  edit
                </button>
                {/* Dropdown menu */}
                <div
                  id="dropdown"
                  className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow-sm w-44 "
                >
                  <ul
                    className=" text-sm text-gray-700 dark:text-gray-200"
                    aria-labelledby="dropdownDefaultButton"
                  >
                    <li>
                        <label
                        
                        htmlFor="file"
                        className="block px-4 py-2 hover:bg-gray-100 "
                      >
                        upload a photo..
                      </label>
                    </li>
                    <li>
                      <button
                      type="button"
                        onClick={onDeleteProfileImage}
                        className="block px-4 py-2 hover:bg-gray-100"
                      >
                        remove a photo..
                      </button>
                    </li>
                  </ul>
                </div>
              </div>

              <input
                type="file"
                className="hidden"
                id="file"
                onChange={(e: ChangeEvent<HTMLInputElement>) => {
                  if (!e.target.files) return;
                  setFile(e.target.files[0]);
                }}
              />
            </form>
          </div>
          <div>
            <h1 className="name text-xl mt-2 font-semibold">Bothiana</h1>
            <p className="title my-2">frontend developer</p>
            <button
              type="submit"
              className="bg-indigo-400 text-base rounded-md p-2 cursor-pointer hover:bg-indigo-300 transition-colors"
            >
              update profile
            </button>
          </div>
        </header>
        <Posts />
        <button
          type="button"
          onClick={onDeleteAccount}
          className="w-fit p-2 border rounded-md text-red-600 cursor-pointer border-red-500"
        >
          delete your Account
        </button>
      </div>
    </section>
  );
};
