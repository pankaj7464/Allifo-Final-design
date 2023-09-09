import React, { useState } from "react";
import { Menu, X, } from "lucide-react";
import { Link, NavLink } from "react-router-dom";
import { PiUserCircle } from "react-icons/pi";
import { CiBellOn, CiSearch } from "react-icons/ci";
import Search from "../Search";
const menuItems = [
  {
    id: 1,
    name: "Home",
    to: "/",
  },
  {
    id: 2,
    name: "News",
    to: "/news",
  },
  {
    id: 3,
    name: "Blog",
    to: "/blog",
  },
  {
    id: 4,
    name: "Explore",
    to: "/explore",
  },
  {
    id: 5,
    name: "About",
    to: "/about",
  },
  {
    id: 6,
    name: "Contact",
    to: "/contact",
  },
];

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setSearchOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className=" border-b border-border  py-4">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 sm:px-6 lg:px-8">
        <div className="inline-flex items-center space-x-2">
          <NavLink to={"/"}>
            <span className="font-bold ">ALLIFO</span>
          </NavLink>
        </div>
        <div className="hidden md:block">
          <ul className="flex justify-between gap-8">
            {menuItems.map((item, index) => (
              <Link
                key={index}
                to={item.to}
                className="inline-flex items-center  text-base font-bold  hover:text-gray-300"
              >
                {item.name}
              </Link>
            ))}
          </ul>
        </div>
        <div className="flex items-center gap-4">

          <div className="flex items-center gap-4">
            <CiBellOn
              className="hover:border border-border cursor-pointer rounded-full "
              size={24}
            />
            <Link to={"/user"}>
              <PiUserCircle
                className="cursor-pointer rounded-full "
                size={24}
              />
            </Link>
          </div>
          <Menu
            onClick={toggleMenu}
            className="h-6 w-6 cursor-pointer lg:hidden"
          />
        </div>
        {isMenuOpen && (
          <div className="absolute inset-x-0 top-0 z-50 origin-top-right transform px-2 transition lg:hidden py-4  bg-darkBlue text-white backdrop-blur-3xl">
            <div className="divide-y-2 divide-gray-50 rounded-lg bg-primary shadow-lg ring-1 ring-black ring-opacity-5">
              <div className="px-5 pb-6 pt-5">
                <div className="flex items-center justify-between">
                  <div className="inline-flex items-center space-x-2">
                    <span className="font-bold">ALLIFO</span>
                  </div>
                  <div className="-mr-2">
                    <button
                      type="button"
                      onClick={toggleMenu}
                      className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                    >
                      <span className="sr-only">Close menu</span>
                      <X className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>
                </div>
                <div className="mt-6">
                  <nav className="flex flex-col gap-2">
                    {menuItems.map((item) => (
                      <Link
                        key={item?.name}
                        to={item.to}
                        onClick={toggleMenu}
                      >
                        <span className="flex items-center  justify-center rounded-md p-3  text-center  hover:bg-secondary  text-xs">
                          {item?.name}
                        </span>
                      </Link>
                    ))}
                    <Link

                      to="/signup"
                    >
                      <span className="flex items-center justify-center rounded-md p-3  text-center  bg-secondary  text-base w-full font-medium">
                        SignUp
                      </span>
                    </Link>
                    <Link

                      to="/singin"
                    >
                      <span className="flex items-center rounded-md justify-center p-3  text-center  bg-secondary  text-base w-full font-medium">
                        SignIn
                      </span>
                    </Link>
                  </nav>
                </div>

              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar