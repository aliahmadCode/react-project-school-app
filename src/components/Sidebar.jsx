import { useState, useEffect, useRef } from "react";
import { HiOutlineHome } from "react-icons/hi2";
import { CiViewTimeline } from "react-icons/ci";
import { TbReportSearch } from "react-icons/tb";
import { GrNotes } from "react-icons/gr";
import { VscNotebook } from "react-icons/vsc";
import { MdOutlineClass } from "react-icons/md";
import { IoMdLogOut } from "react-icons/io";
import { IoIosClose } from "react-icons/io";
import Navbar from "./Navbar";

const sidebar = [
  { id: 1, icon: HiOutlineHome, text: "Dashboard", clicked: true },
  { id: 2, icon: CiViewTimeline, text: "Time Table", clicked: false },
  { id: 3, icon: TbReportSearch, text: "Student Reports", clicked: false },
  { id: 4, icon: GrNotes, text: "Assignments", clicked: false },
  { id: 5, icon: MdOutlineClass, text: "Quizzes", clicked: false },
  { id: 6, icon: VscNotebook, text: "Classroom", clicked: false },
];

function Sidebar() {
  const [hide, setHide] = useState(true);
  const [side, setSide] = useState(sidebar);

  function handleHide() {
    setHide((prev) => !prev);
  }
  function handleClick(id) {
    const arr = [];
    sidebar.map((item) => {
      if (item.id === id) {
        item.clicked = true;
        arr.push(item);
      } else {
        item.clicked = false;
        arr.push(item);
      }
    });
    setSide(arr);
  }

  const styleSelected = {
    color: "#b43548",
    backgroundColor: "#f6e8ea",
  };
  const styleSelectedForFalse = {
    color: "#898989",
  };

  return (
    <>
      <div className="select-none overflow-auto h-full min-h-screen font-sans hidden lg:flex flex-col items-center w-full lg:min-w-[250px] lg:max-w-[250px] bg-white px-6">
        <div className="flex flex-col mt-10 cursor-pointer">
          <div className="flex px-4 gap-2 flex-row justify-start items-start">
            <img className="w-11 h-12" src="src/assets/logo.jpg" alt="logo" />
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
        <div className="flex flex-col gap-3 mt-6 w-full">
          {side.map((item) => {
            const ICON = item.icon;
            return (
              <div
                key={item.id}
                style={item.clicked ? styleSelected : styleSelectedForFalse}
                onClick={() => handleClick(item.id)}
                className="flex gap-3 items-center px-4  font-[500] py-[10px] rounded-lg text-[18px] cursor-pointer "
              >
                <ICON className="text-[20px]" />
                <h3>{item.text}</h3>
              </div>
            );
          })}
          <hr className="bg-[#000] w-full" />
          <div className="flex gap-2 items-center px-4 hover:bg-[#f6e8ea] text-[#b43548] font-[500] py-[10px] rounded-lg text-[18px] cursor-pointer ">
            <IoMdLogOut className="text-[20px]" />
            <h3>Logout</h3>
          </div>
        </div>
      </div>
      {hide ? (
        <>
          <Navbar handleHide={handleHide} />
        </>
      ) : (
        <>
          <Navbar handleHide={handleHide} />
          <div className="h-full max-h-screen absolute top-0 font-sans flex lg:hidden flex-col items-center w-full max-w-[290px] bg-white px-8">
            <div className="relative">
              <IoIosClose
                onClick={handleHide}
                className="fixed top-3 left-3 text-[27px] hover:bg-[#f6e8ea] hover:text-[#b43548] rounded-sm cursor-pointer"
              />
            </div>
            <div className="flex flex-col mt-10 cursor-pointer">
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
            <div className="flex flex-col gap-3 mt-6 w-full">
              {side.map((item) => {
                const ICON = item.icon;
                return (
                  <div
                    key={item.id}
                    style={item.clicked ? styleSelected : styleSelectedForFalse}
                    onClick={() => handleClick(item.id)}
                    className="flex gap-3 items-center px-4  font-[500] py-[10px] rounded-lg text-[18px] cursor-pointer "
                  >
                    <ICON className="text-[20px]" />
                    <h3>{item.text}</h3>
                  </div>
                );
              })}
              <hr className="bg-[#000] w-full" />
              <div className="flex gap-2 items-center px-4 hover:bg-[#f6e8ea] text-[#b43548] font-[500] py-[10px] rounded-lg text-[18px] cursor-pointer ">
                <IoMdLogOut className="text-[20px]" />
                <h3>Logout</h3>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default Sidebar;
