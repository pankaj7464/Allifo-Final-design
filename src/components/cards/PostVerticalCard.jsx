import React from "react";
import PostMetaData from "../common/PostMetaData";
import image from "../../assets/images.jpg";
const PostVerticalCard = ({ className }) => {
  return (
    <div className={`flex flex-col ${className}`}>
      <img className=" w-full" src={image} alt="" />

      <h2 className="text-xl font-semibold">
        Wordle Today (#791): Wordle answer and hints for August 19
      </h2>
      <PostMetaData
        category={"Entertainment"}
        author={"Nick Pankaj "}
        time={"9 hour ago"}
      />
    </div>
  );
};
export default PostVerticalCard;
