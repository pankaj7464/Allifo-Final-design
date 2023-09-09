import React from "react";
import PostMetaData from "../common/PostMetaData";
const PostCard = ({ post }) => {
  return (
    <div className={` w-full max-h-[10rem]`}>
      <h2 className="text-xl font-semibold">
        {post?.title}
      </h2>
      <PostMetaData
        category={post?.categoryId?.name}
        author={"Nick Pankaj "}
        time={"9 hour ago"}
      />
    </div>
  );
};

export default PostCard;
