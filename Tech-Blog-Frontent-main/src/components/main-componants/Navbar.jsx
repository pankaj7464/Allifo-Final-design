import React, { useEffect, useState } from "react";
import Button1 from "../common/Button";
import Ul, { Li } from "../common/Ul";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isSticky, setIsSticky] = useState(false)
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <section
        className={`flex items-center justify-between px-16 bg-black text-white py-4 ${
          isSticky ? "sticky top-0 z-50" : ""
        }`}
      >
        <section>
          <strong>Blog</strong>
        </section>
        <section className="hidden md:block">
          <Ul className=" gap-8 ">
            <Link to="/">
              <Li>Home</Li>
            </Link>
            <Link to="/about-us">
              <Li>About Us</Li>
            </Link>
            <Link to="/explore">
              <Li>Explore</Li>
            </Link>
            <Link to="/trending">
              <Li>Tending </Li>
            </Link>

            <Link to="/contact-us">
              <Li>Contact us</Li>
            </Link>
          </Ul>
        </section>
        <section>
          <Button1>SignUp/SignIn</Button1>
        </section>
      </section>
    </>
  );
};

export default Navbar;
