import { useState, useEffect, useRef } from "react";
import { RiMenu2Fill } from "react-icons/ri";
import { CiBellOn } from "react-icons/ci";
import { BiMessageSquareDetail } from "react-icons/bi";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";

function Navbar({ handleHide }) {
  const [isHide, setIsHide] = useState(false);
  function showUser() {
    setIsHide((prev) => !prev);
  }
  return (
    <>
      <div className="flex lg:hidden justify-between px-7 select-none">
        <div className="flex mt-5">
          <RiMenu2Fill
            onClick={handleHide}
            className="text-[33px] px-2 py-1 hover:bg-[#f6e8ea] hover:text-[#b43548] rounded-sm cursor-pointer"
          />
          <div className="flex flex-col cursor-pointer">
            <div className="flex px-4 gap-2 flex-row justify-start items-start">
              <img
                className="w-11 h-12"
                src="src/assets/logo.jpg"
                alt="logo"
              />
              <div className="flex flex-col text-[13px] font-[500] leading-[16px]">
                <p>Institute of</p>
                <p>Business Administration</p>
                <p>karachi</p>
              </div>
            </div>
            <p className="italic px-4 mt-[1px] text-[10px] font-[500] ">
              Leadership and Ideas For Tommorrow
            </p>
          </div>
        </div>
        <div className="hidden sm:flex gap-3 items-center">
          <CiBellOn className="bg-white px-1 text-[32px] cursor-pointer hover:bg-[#f6e8ea] hover:text-[#b43548]" />
          <BiMessageSquareDetail className="bg-white px-1 text-[32px] cursor-pointer hover:bg-[#f6e8ea] hover:text-[#b43548]" />
          <div className="flex items-center gap-2 cursor-pointer ">
            <h3>John Smith</h3>
            <img src="src/assets/user.jpg" alt="user" className="w-8 h-8" />
          </div>
          <IoIosArrowDown className="cursor-pointer " />
        </div>
        <div className="flex sm:hidden items-center relative">
          <div className="flex items-center gap-2 cursor-pointer">
            <h3>John Smith</h3>
            <img src="src/assets/user.jpg" alt="user" className="w-8 h-8" />
            {isHide ? (
              <IoIosArrowDown
                onClick={() => showUser()}
                className="cursor-pointer hover:bg-[#f6e8ea] hover:text-[#b43548] px-1 py-1 text-[23px] rounded-sm"
              />
            ) : (
              <IoIosArrowUp
                onClick={showUser}
                className="cursor-pointer hover:bg-[#f6e8ea] hover:text-[#b43548] px-1 py-1 text-[23px] rounded-sm"
              />
            )}
          </div>
          {isHide ? (
            <div className="absolute top-[70px] right-0 w-full max-w-[200px] flex p-3 items-center gap-2">
              <CiBellOn className="bg-white px-1 text-[32px] cursor-pointer hover:bg-[#f6e8ea] hover:text-[#b43548]" />
              <BiMessageSquareDetail className="bg-white px-1 text-[32px] cursor-pointer hover:bg-[#f6e8ea] hover:text-[#b43548]" />
            </div>
          ) : null}
        </div>
      </div>
    </>
  );
}

export default Navbar;
