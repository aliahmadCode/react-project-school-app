import { useState, useEffect, useRef } from "react";
import { RiMenu2Fill } from "react-icons/ri";
import { CiBellOn } from "react-icons/ci";
import { BiMessageSquareDetail } from "react-icons/bi";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";

function Header() {
  return (
    <>
      <div className="flex justify-between mt-14 lg:ml-1">
        <div className="flex flex-col">
          <h1 className="text-[30px] font-[600]">Hello John! 👋</h1>
          <p className="text-[#636363] text-[16px]">Let's inspire and empower young minds. Have a fantastic day!"</p>
        </div>
        <div className="hidden lg:flex gap-3 items-center">
          <CiBellOn className="bg-white px-1 text-[32px] cursor-pointer hover:bg-[#f6e8ea] hover:text-[#b43548]" />
          <BiMessageSquareDetail className="bg-white px-1 text-[32px] cursor-pointer hover:bg-[#f6e8ea] hover:text-[#b43548]" />
          <div className="flex items-center gap-2 cursor-pointer ">
            <h3>John Smith</h3>
            <img src="src/assets/user.svg" alt="user" className="w-8 h-8" />
          </div>
          <IoIosArrowDown className="cursor-pointer " />
        </div>
        
      </div>
    </>
  );
}

export default Header;
