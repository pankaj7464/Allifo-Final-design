import React from "react";
import HeroMainPost from "../cards/HeroMainPost";
import PostCardWithThumbnail from "../cards/PostCardWithThumbnail";
import PostCard from "../cards/PostCard";
import PostVerticalCard from "../cards/PostVerticalCard";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <>
      <section className="w-full bg-darkBlue text-white lg:p-6 md:px-10 md:py-4 p-2">
        <div className="grid md:grid-cols-[50%_48%] gap-10 ">
          <div className=" flex flex-col gap-4">
            <HeroMainPost />
            <hr className="border-t-2  border-slate-600" />
            {[1, 2, 3, 4, 5]?.map((card,index) => {
              return (
                <>
                  <Link to={`/${"computer"}/${"dfsdfsdfsd"}`} key={index}>
                    <PostCardWithThumbnail />
                  </Link>
                  <hr className="border-t-2  border-slate-600" />
                </>
              );
            })}
          </div>
          <div className=" w-full grid lg:grid-cols-[50%_48%] gap-3">
           
            <div className="w-full flex flex-col gap-8 ">
            <h2 className=" text-xl font-bold text-colors-accent">LATEST HEADLINES</h2>
              {[1, 2, 3, 4, 5]?.map((card,index) => {
                return (
                  <>
                    <Link  to={`/${"computer"}/${"dfsdfsdfsd"}`} key={index}>
                      <PostCard />
                    </Link>
                    <hr className="border-t-2  border-slate-600" />
                  </>
                );
              })}
            </div>
            <div className="w-full flex flex-col gap-4">
              {[1, 2, 3]?.map((card,index) => {
                return (
                  <>
                    <Link to={`/${"computer"}/${"dfsdfsdfsd"}`} key={index}>
                      <PostVerticalCard />
                    </Link>
                    <hr className="border-t-2  border-slate-600" />
                  </>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
