import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-colors-secondary text-white py-10">
      <section className="flex max-w-6xl mx-auto justify-between">
        <div className="w-full md:w-1/2 pr-10 mb-8 md:mb-0">
          <h2 className="text-xl font-semibold mb-4">Tech Industries</h2>
          <p className="text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde sunt
            aspernatur a fuga animi iure esse ex eaque accusantium delectus!
          </p>
          <form className="mt-4">
            <input
              type="text"
              className="bg-white rounded py-2 px-3 w-full"
              placeholder="Your email"
            />
            <button className="bg-primary text-white py-2 px-4 rounded mt-2">
              Subscribe
            </button>
          </form>
        </div>
        <div className="w-full md:w-1/4 pr-10 mb-8 md:mb-0">
          <h2 className="text-xl font-semibold mb-4">Categories</h2>
          <ul className="flex-col text-sm space-y-2">
            <li>
              <Link to="#" className="hover:text-white">
                Entertainment
              </Link>
            </li>
            <li>
              <Link to="#" className="hover:text-white">
                Computer
              </Link>
            </li>
            <li>
              <Link to="#" className="hover:text-white">
                Game
              </Link>
            </li>
            <li>
              <Link to="#" className="hover:text-white">
                Programming
              </Link>
            </li>
          </ul>
        </div>
        <div className="w-full md:w-1/4">
          <h2 className="text-xl font-semibold mb-4">Contact</h2>
          <p className="text-sm">
            You can reach us at: <br />
            contact@example.com
          </p>
        </div>
        <div className="w-full md:w-1/4">
          <h2 className="text-xl font-semibold mb-4">Quick Links</h2>
          <ul className="flex-col text-sm space-y-2">
            <li>
              <Link to="#" className="hover:text-white">
                About Us
              </Link>
            </li>
            <li>
              <Link to="#" className="hover:text-white">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      </section>
      <section className="text-center mt-10">
        <p className="text-gray-400">
          Copyright &copy; 2023 Tech Industries. All Rights Reserved.
        </p>
      </section>
      <section className="mt-10 text-center text-gray-400 text-sm">
        <div className="mb-4">
          <Link to="/privacy-policy" className="hover:text-white">
            Privacy Policy
          </Link>{" "}
          |
          <Link to="/terms-of-use" className="hover:text-white">
            Terms of Use
          </Link>
        </div>
        <div>
          This website is for informational purposes only. It is not intended to
          be professional or legal advice.
        </div>
      </section>
    </footer>
  );
};

export default Footer;
