import React from "react";

const Button = ({ children }) => {
  return (
    <button className="bg-[#233000] px-10 py-2 text-white font-extrabold text-[20px]">
      {children}
    </button>
  );
};

export default Button;
