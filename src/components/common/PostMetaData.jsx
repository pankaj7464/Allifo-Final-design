import React from "react";

const PostMetaData = ({ category, author, time }) => {
  return (
    <div className="flex  items-center gap-4">
      <strong className=" text-colors-primary-lighter">{category?.toUpperCase()}</strong>
      <span>{author}</span>
      <span>{time}</span>
    </div>
  );
};

export default PostMetaData;
