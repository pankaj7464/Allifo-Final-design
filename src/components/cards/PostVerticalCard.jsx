import React from "react";
import PostMetaData from "../common/PostMetaData";
import image from "../../assets/images.jpg";
import { Link } from "react-router-dom";
const PostVerticalCard = ({ item, className }) => {
  return <div className={`flex flex-col ${className}`}>
    <img className=" w-full" src={image} alt="" />
    <h2 className="text-xl font-semibold">
      {item?.title}
    </h2>
    <PostMetaData
      category={item?.categoryId?.name}
      author={"Nick Pankaj "}
      time={"9 hour ago"}
    />
  </div>
};
export default PostVerticalCard;
