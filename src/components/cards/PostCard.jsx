import React from "react";
import PostMetaData from "../common/PostMetaData";
const PostCard = () => {
  return (
    <div className={` w-full max-h-[10rem]`}>
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

export default PostCard;
