import React from "react";

const Button1 = ({ className, children, ...props }) => {
  return (
    <>
      <button
        className={`flex items-center justify-center gap-2 text-lg cursor-pointer ${className} px-2 py-1 hover:bg-gray-200 hover:text-gray-800`}
        {...props}
      >
        {children}
      </button>
    </>
  );
};

export default Button1;
