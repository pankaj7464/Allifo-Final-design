import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs"; // Import icons from react-icons
import { smoothScroll } from "../../utils/utils";
import { useSelector } from "react-redux";

const Banner = () => {
  const category = useSelector(state => state?.blogs?.category) || []
  console.log(category)
  const test = [
    {
      name: "News",
      _id: "2323" + new Date().getMilliseconds(),
    },
    {
      name: "Computing",
      _id: "2323"+ new Date().getMilliseconds(),
    },
    {
      name: "Top Deals",
      _id: "2323"+ new Date().getMilliseconds(),
    },
    {
      name: "Top College",
      _id: "2323"+ new Date().getMilliseconds(),
    },
    {
      name: "News",
      _id: "2323"+ new Date().getMilliseconds(),
    },
    {
      name: "Computing",
      _id: "2323"+ new Date().getMilliseconds(),
    },
    {
      name: "Top Deals",
      _id: "2323"+ new Date().getMilliseconds(),
    },
    {
      name: "Top College",
      _id: "2323"+ new Date().getMilliseconds(),
    },
    {
      name: "News",
      _id: "2323"+ new Date().getMilliseconds(),
    },
    {
      name: "Computing",
      _id: "2323"+ new Date().getMilliseconds(),
    },
    {
      name: "Top Deals",
      _id: "2323"+ new Date().getMilliseconds(),
    },
    {
      name: "Top College",
      _id: "2323"+ new Date().getMilliseconds(),
    },
  ];

  const scrollContainerRef = useRef(null);

  const handleScrollLeft = () => {
    if (scrollContainerRef.current) {
      smoothScroll(scrollContainerRef.current, -100);
    }
  };

  const handleScrollRight = () => {
    if (scrollContainerRef.current) {
      smoothScroll(scrollContainerRef.current, +100);; // Adjust the scroll amount as needed
    }
  };



  return (
    <div className="sticky left-0 top-0 z-40 w-full backdrop-blur-2xl bg-primary p-4 border-t border-b">
      <div className="flex items-center gap-4">
        <button onClick={handleScrollLeft}>
          <BsArrowLeft />
        </button>
        <div
          className="overflow-x-scroll flex items-center gap-4 md:gap-8 no-scrollbar"
          ref={scrollContainerRef}
        >
          {category?.concat(test)?.map((item) => <Link key={item._id}>
            <span className="font-bold uppercase whitespace-nowrap">
              {item?.name}
            </span>
          </Link>)}
        </div>
        <button onClick={handleScrollRight}>
          <BsArrowRight />
        </button>
      </div>
    </div>
  );
};
export default Banner;
