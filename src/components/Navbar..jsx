import { useState } from "react";
import { logo, close, menu } from "../assets";
import { navLinks } from "../constants";
import { MdNotificationsActive } from "react-icons/md";
const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="w-full flex flex-wrap py-6 justify-between items-center navbar">
      <div class="mb-3 sm:w-[500px] lg:w-[900px]  ">
        <label
          for="default-search"
          class="mb-2 text-sm font-medium sr-only dark:text-white"
        >
          Search
        </label>
        <div class="relative">
          <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg
              aria-hidden="true"
              class="w-5 h-5 text-gray-500 dark:text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              ></path>
            </svg>
          </div>
          <input
            type="search"
            id="default-search"
            className="block w-full p-4 pl-10 text-sm  border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500   dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Search ..."
            required
          />
        </div>
      </div>
      <div className=" w-12 h-12 flex items-center justify-center bg-white rounded-md">
        <MdNotificationsActive color="red" />
      </div>
      <div>
        <div class="shrink-0 flex items-center gap-4 px-8">
          <img
            className="h-14 w-14 object-cover rounded-full"
            src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1361&q=80"
            alt="Current profile photo"
          />
          <p>hii annias</p>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
