import React from "react";

const PrimaryButton = ({children, block}) => {
  return (
    <button className={`btn bg-gradient-to-l from-orange-300 to-orange-500 py-2 px-6 rounded-md text-white mt-4 text-xl font-semibold ${block && 'block w-full'}`}>{children}</button>
  );
};

export default PrimaryButton;
