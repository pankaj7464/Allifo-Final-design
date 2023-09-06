import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs"; // Import icons from react-icons
import { smoothScroll } from "../../utils/utils";

const Banner = () => {
  const category = [
    {
      category: "News",
      _id: "2323",
    },
    {
      category: "Computing",
      _id: "2323",
    },
    {
      category: "Top Deals",
      _id: "2323",
    },
    {
      category: "Top College",
      _id: "2323",
    },
    {
      category: "News",
      _id: "2323",
    },
    {
      category: "Computing",
      _id: "2323",
    },
    {
      category: "Top Deals",
      _id: "2323",
    },
    {
      category: "Top College",
      _id: "2323",
    },
    {
      category: "News",
      _id: "2323",
    },
    {
      category: "Computing",
      _id: "2323",
    },
    {
      category: "Top Deals",
      _id: "2323",
    },
    {
      category: "Top College",
      _id: "2323",
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
    <div className="bg-primary p-4 mb-3 border-t border-b">
      <div className="flex items-center gap-4">
        <button onClick={handleScrollLeft}>
          <BsArrowLeft />
        </button>
        <div
          className="overflow-x-scroll flex items-center gap-4 md:gap-8 no-scrollbar"
          ref={scrollContainerRef}
        >
          {category?.map((item) => <Link key={item._id}>
            <span className="font-bold uppercase whitespace-nowrap">
              {item?.category}
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
