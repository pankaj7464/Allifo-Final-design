import React from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Input } from "../components/common/Inputs";
import Button from "../components/common/Button";

const SignupPage = () => {
  return (
    <section className="bg-darkBlue text-white py-4">
      <div className="flex items-center justify-center px-4  sm:px-6  lg:px-8">
        <div className="xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md bg-primary rounded-xl p-8 border">
          <div className="mb-2 flex justify-center">
            <h1>NEBULA</h1>
          </div>
          <h2 className="text-center text-2xl font-bold leading-tight ">
            Sign up to create account
          </h2>
          <p className="mt-2 text-center text-base ">
            Already have an account?{" "}
            <Link
              to={"/signin"}
              title=""
              className="font-medium  transition-all duration-200 hover:underline"
            >
              Sign In
            </Link>
          </p>
          <form action="#" method="POST" className="mt-8">
            <div className="space-y-5">
              <div>
                <label htmlFor="name" className="text-base font-medium ">
                  {" "}
                  Full Name{" "}
                </label>
                <div className="mt-2">
                  <Input type="text" placeholder="Full Name" id="name"></Input>
                </div>
              </div>
              <div>
                <label htmlFor="name" className="text-base font-medium ">
                  {" "}
                  User Name{" "}
                </label>
                <div className="mt-2">
                  <Input type="text" placeholder="User Name" id="name"></Input>
                </div>
              </div>
              <div>
                <label htmlFor="email" className="text-base font-medium ">
                  {" "}
                  Email address{" "}
                </label>
                <div className="mt-2">
                  <Input
                    className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                    type="email"
                    placeholder="Email"
                    id="email"
                  ></Input>
                </div>
              </div>
              <div>
                <div className="flex items-center justify-between">
                  <label htmlFor="password" className="text-base font-medium ">
                    {" "}
                    Password{" "}
                  </label>
                </div>
                <div className="mt-2">
                  <Input
                    className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                    type="password"
                    placeholder="Password"
                    id="password"
                  ></Input>
                </div>
              </div>
              <div>
                <Button
                  type="button"
                  className="inline-flex w-full items-center justify-center rounded-md  px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-black/80"
                >
                  Create Account <ArrowRight className="ml-2" size={16} />
                </Button>
              </div>
            </div>
          </form>
          <div className="mt-3 space-y-3">
            <button
              type="button"
              className="relative inline-flex w-full items-center justify-center rounded-md border border-gray-400 bg-white px-3.5 py-2.5 font-semibold text-gray-700 transition-all duration-200 hover:bg-gray-100 hover:text-black focus:bg-gray-100 focus:text-black focus:outline-none"
            >
              <span className="mr-2 inline-block">
                <svg
                  className="h-6 w-6 text-rose-500"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M20.283 10.356h-8.327v3.451h4.792c-.446 2.193-2.313 3.453-4.792 3.453a5.27 5.27 0 0 1-5.279-5.28 5.27 5.27 0 0 1 5.279-5.279c1.259 0 2.397.447 3.29 1.178l2.6-2.599c-1.584-1.381-3.615-2.233-5.89-2.233a8.908 8.908 0 0 0-8.934 8.934 8.907 8.907 0 0 0 8.934 8.934c4.467 0 8.529-3.249 8.529-8.934 0-.528-.081-1.097-.202-1.625z"></path>
                </svg>
              </span>
              Sign up with Google
            </button>
            <button
              type="button"
              className="relative inline-flex w-full items-center justify-center rounded-md border border-gray-400 bg-white px-3.5 py-2.5 font-semibold text-gray-700 transition-all duration-200 hover:bg-gray-100 hover:text-black focus:bg-gray-100 focus:text-black focus:outline-none"
            >
              <span className="mr-2 inline-block">
                <svg
                  className="h-6 w-6 text-[#2563EB]"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M13.397 20.997v-8.196h2.765l.411-3.209h-3.176V7.548c0-.926.258-1.56 1.587-1.56h1.684V3.127A22.336 22.336 0 0 0 14.201 3c-2.444 0-4.122 1.492-4.122 4.231v2.355H7.332v3.209h2.753v8.202h3.312z"></path>
                </svg>
              </span>
              Sign up with Facebook
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignupPage;
