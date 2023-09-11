import React from "react";
import { ChevronRight } from "lucide-react";
import Button from "../common/Button";
import { Input } from "../common/Inputs";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer className="w-full bg-primary  border-t border-border mt-10 mb-4">
      <div className="mx-auto py-4 flex max-w-6xl items-center justify-between">
        <div className="inline-flex items-center">
          <span className="ml-4 text-lg font-bold">ALLIFO</span>
        </div>
        <div className=" items-center md:inline-flex">
          <span className="hidden md:inline-block text-sm font-medium ">
            Ready to Get Started ?
          </span>
          <Button
            type="button"
            className="ml-2 rounded-md  px-3 py-2 text-sm font-semibold  "
          >
            Get Started
          </Button>
        </div>
      </div>
      <hr className="border" />
      <div className="mx-auto flex max-w-6xl flex-col items-start space-x-8 md:flex-row mt-6">
        <div className="w-full px-4 md:w-1/2 lg:px-0">
          <h1 className="max-w-sm text-3xl font-bold">
            Subscribe to our Newsletter
          </h1>
          <form
            action=""
            className="mt-4 inline-flex w-full items-center md:w-3/4"
          >
            <Input
              className="flex h-10 w-full rounded-md border border-black/20 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
              type="email"
              placeholder="Email"
            ></Input>
            <Button
              type="button"
              className="ml-4 rounded-full  px-3 py-3 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </form>
        </div>
        <div className="mt-8 grid grid-cols-2 gap-6 md:mt-0 lg:w-3/4 lg:grid-cols-3">

          <div className="mb-8 lg:mb-0">
            <p className="mb-6 text-lg font-semibold text-gray-700 ">
              Company
            </p>
            <ul className="flex flex-col space-y-4 text-[14px] font-medium text-gray-500">
              {
                ["AboutUs", "Company history", "Our team", "Our Vision", "Press release"].map(menu => <>
                  <Link to="/about"><li className=" hover:underline hover:text-slate-900 ">{menu}</li></Link>
                </>)
              }
            </ul>
          </div>
          <div className="mb-8 lg:mb-0">
            <p className="mb-6 text-lg font-semibold text-gray-700 ">
              Most visit
            </p>
            <ul className="flex flex-col space-y-4 text-[14px] font-medium text-gray-500">
              <Link to="/contact" className="hover:underline hover:text-slate-900">
                Contact Us
              </Link>{" "}
              <Link to="/privacy-policy" className="hover:underline hover:text-slate-900">
                Privacy Policy
              </Link>{" "}
              <Link to="/terms-of-use" className="hover:underline hover:text-slaFte-900">
                Terms of Use
              </Link>
              <Link to="/blogs" className="hover:underline hover:text-slaFte-900">
               Blogs
              </Link>
              <Link to="/feature" className="hover:underline hover:text-slaFte-900">
               Feature
              </Link>
            </ul>
          </div>
          <div className="mb-8 lg:mb-0">
            <p className="mb-6 text-lg font-semibold text-gray-700 ">
              Company
            </p>
            <ul className="flex flex-col space-y-4 text-[14px] font-medium text-gray-500">
              {
                ["AboutUs", "Company history", "Our team", "Our Vision", "Press release"].map(menu => <>
                  <Link to="/about"><li className=" hover:underline hover:text-slate-900 ">{menu}</li></Link>
                </>)
              }
            </ul>
          </div>

        </div>
      </div>
      <section className="text-center mt-10">
        <p className="text-gray-400">
          Copyright &copy; {new Date().getFullYear()} Tech Industries. All Rights Reserved.
        </p>
      </section>
      <section className="mt-10 text-center text-gray-400 text-sm">
        <div>
          This website is for informational purposes only. It is not intended to
          be professional or legal advice.
        </div>
      </section>
    </footer>
  );
};

export default Footer;
