import React from "react";
import HeroMainPost from "../cards/HeroMainPost";
import PostCardWithThumbnail from "../cards/PostCardWithThumbnail";
import PostCard from "../cards/PostCard";
import { Link } from "react-router-dom";

const Hero = ({ trendingPosts, topRecentPosts }) => {
  return (
    <>
      <section className="w-full bg-darkBlue text-white lg:p-6 md:px-10 md:py-4 p-2">
        <div className="grid md:grid-cols-[70%_28%] gap-10 ">
          <div className=" flex flex-col gap-4">
            <HeroMainPost />
            <hr className="border-t-2  border-slate-600" />
            {topRecentPosts?.map((post, index) => {
              return (
                <>
                  <Link key={post?._id} to={`${post?.categoryId?.name?.split(" ").join("-")}/${post?.slug}`}>
                    <PostCardWithThumbnail post={post} />
                  </Link>
                  <hr className="border-t-2  border-slate-600" />
                </>
              );
            })}
          </div>

          <div className="w-full flex flex-col gap-8 ">
            <h2 className=" text-xl font-bold text-colors-accent">LATEST HEADLINES</h2>
            {trendingPosts?.map((post, index) => {
              return (
                <>
                  <Link key={post?._id} to={`${post?.categoryId?.name?.split(" ").join("-")}/${post?.slug}`}>
                    <PostCard post={post} />
                  </Link>
                  <hr  key={post?._id+index} className="border-t-2  border-slate-600" />
                </>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
