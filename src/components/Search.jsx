import React, { useEffect, useRef, useState } from "react";
import { CiSearch } from "react-icons/ci";
const Search = ({ isSearchOpen, setSearchOpen }) => {
  
  const searchRef = useRef(null);
  const handleDocumentClick = (e) => {
    if (searchRef.current && !searchRef.current.contains(e.target) ) {
      setSearchOpen(false)
    
    }
  };
  useEffect(() => {
    if (isSearchOpen) {
      document.addEventListener("click", handleDocumentClick);
    } else {
      document.removeEventListener("click", handleDocumentClick);
    }
    return () => {
      document.removeEventListener("click", handleDocumentClick);
    };
  }, []);
  return (
    <div ref={searchRef} className=" right-0 z-50 bg-white absolute border border-border rounded-full  flex items-center  gap-4 px-2 sm:px-4 py-2">
      <CiSearch size={25} color="#2c3646" />
      <input
        placeholder="Search For Development"
        className="outline-none bg-transparent"

        type="search"
        name=""
        onChange={(e) => { }}
        id=""
      />
    </div>
  );
};

export default Search;
