import React from "react";

const PostMetaData = ({ category, author, time }) => {
  return (
    <div className="flex  items-center gap-4">
      <strong className=" text-linkedinColor">{category?.toUpperCase()}</strong>
      <span className=" text-slate-500">{author}</span>
      <span className="text-slate-600">{time}</span>
    </div>
  );
};

export default PostMetaData;
