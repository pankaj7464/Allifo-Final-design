import React from "react";
import image from "../../assets/images.jpg";
import PostMetaData from "../common/PostMetaData";
const HeroMainPost = ({}) => {
  return (
    <>
      <div className="flex flex-col h-auto w-full">
        <img className=" w-full h-1/2" src={image} alt="" />
        <div>
          <h1>The DCEU was better than the MCU. Here’s why</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit cum
            nam reiciendis quasi rerum incidunt minus impedit nulla nesciunt
            dicta?
          </p>
          <PostMetaData category={"Movie"} author={"Nick Pankaj "} />
        </div>
      </div>
    </>
  );
};

export default HeroMainPost;
