import React from 'react';
import Image from "next/image";

const HeaderMain = () => {
    return (
        <div className={"flex bg-gray-600  h-[80px]  items-center px-5"}>
            <div className={"relative h-[50px] w-[50px] overflow-hidden  flex items-center"}>
                  <Image
                      fill
                      alt='item'
                      src={'/img/avatar.jpg'}
                  />
            </div>
            <div className={"text-white flex items-center px-5"}>
               full name
            </div>
        </div>
    );
};

export default HeaderMain;
