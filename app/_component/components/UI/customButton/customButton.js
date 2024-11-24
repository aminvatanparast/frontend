import React from 'react';
import Loading from "../../Loading";

const CustomButton = ({title , onClick , loading , styles , disable , icon}) => {
  const handleClick = () => {
    onClick()
  }
  return (
    <button
      disabled={disable}
      onClick={handleClick}
      className={`${styles || ""} ${disable && "opacity-40 select-none !bg-gray-500"} !bg-customPrimary-300 tracking-wide text-center max-h-[48px] font-medium bg-main text-white gray-100 w-full py-4 px-8 rounded-md  transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none`}>
      {
        icon && <span className={"mx-1"}>
        {icon}
        </span>
      }
      <span>
          {loading ? <Loading/> : title}
      </span>
    </button>
  );
};

export default CustomButton;
