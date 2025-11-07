import { Link, NavLink } from "react-router-dom";
import { CiSearch } from "react-icons/ci";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoIosLogOut } from "react-icons/io";
import { TfiWrite } from "react-icons/tfi";
import imgProfile from "../../assets/image/download.jpg"

import { useState } from "react";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="bg-indigo-500 fixed  left-0 right-0 text-white p-3 ">
      <div className="container mx-auto">
        <div className="flex items-center gap-10  justify-between">
          {/* logo */}
          <Link to="/">
            <h1 className="font-bold text-2xl ">MyBlog</h1>
          </Link>

          {/* links in desktop */}
          <ul className=" hidden md:flex items-center gap-7  text-base ">
            <li className="hover:text-yellow-500 transition-colors">
              <Link to={"/"}>Home</Link>
            </li>
            <li className="hover:text-yellow-500 transition-colors">
              <Link className="flex items-center gap-1" to={"/createPost"}>
                <TfiWrite className="text-xl" />
                create Post{" "}
              </Link>
            </li>
          </ul>

          {/* search */}
          <div className=" relative  text-white hidden  md:flex items-center gap-1">
            <CiSearch className="absolute top-2.5  left-3 " />
            <input
              type="text"
              placeholder="search "
              className="text-white border pl-8 py-1 border-gray-300 rounded-full focus:outline-0 "
            />
          </div>
          <Link to="/profile">
          <img src={imgProfile} className="w-10 h-10 rounded-full object-fill" alt="" />
          </Link>
          <div>
            <ul className=" hidden md:flex items-center gap-3 ">
              <li className="hover:text-yellow-500 transition-colors">
                <NavLink to="/login">login</NavLink>
              </li>
              <li className="hover:text-yellow-500 transition-colors">
                <NavLink to="/register">register</NavLink>
              </li>
              <span>
                <IoIosLogOut className="text-2xl cursor-pointer" />
              </span>
            </ul>
          </div>

          <button
            className="cursor-pointer text-3xl md:hidden"
            onClick={() => {
              setIsOpen(!isOpen);
            }}
          >
            <RxHamburgerMenu />
          </button>
        </div>
        {/* links in mobile */}
        <ul
          className={`absolute top-16 font-semibold text-center bg-gray-200 transform transition text-indigo-500 left-0 w-full ${
            isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
          } `}
        >
          <li
            onClick={() => {
              setIsOpen(false);
            }}
            className="my-3"
          >
            <NavLink to={"/"}>Home</NavLink>
          </li>
          <li
            onClick={() => {
              setIsOpen(false);
            }}
            className="my-3"
          >
            <NavLink to={"/createPost"}>createPost</NavLink>
          </li>
          <hr className="text-gray-300" />
          <li
            onClick={() => {
              setIsOpen(false);
            }}
            className="my-3"
          >
            <NavLink to="/login">login</NavLink>
          </li>
          <li
            onClick={() => {
              setIsOpen(false);
            }}
            className="my-3"
          >
            <NavLink to="/register">register</NavLink>
          </li>
          <span className="text-center bg-amber-500">
            <IoIosLogOut className="text-2xl mx-auto  cursor-pointer" />
          </span>
        </ul>
      </div>
    </nav>
  );
};
