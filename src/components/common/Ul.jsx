import React from "react";

const Ul = ({ className, ...props }) => {
  return (
    <>
      <ul className={`flex ${className}`}>{props.children}</ul>
    </>
  );
};

export default Ul;

export const Li = (props) => {
  const { className, children, ...restProps } = props;
  console.log(restProps);
  return (
    <li className={` text-xl cursor-pointer ${className}`} {...restProps}>
      {children}
    </li>
  );
};
