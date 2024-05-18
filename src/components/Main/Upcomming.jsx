import { useState, useEffect, useRef } from "react";
import { CiLogin } from "react-icons/ci";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";
import { CiTimer } from "react-icons/ci";
import { HiVideoCamera } from "react-icons/hi";
import { AiOutlineMenuFold } from "react-icons/ai";

// const classes = [{ id: 1, data }];
const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const myGridData = [
  { id: 1, data: "Mo", checked: false },
  { id: 2, data: "Tu", checked: false },
  { id: 3, data: "We", checked: false },
  { id: 4, data: "Th", checked: false },
  { id: 5, data: "Fr", checked: false },
  { id: 6, data: "Sa", checked: false },
  { id: 7, data: "Su", checked: false },
  { id: 8, data: "26", checked: false },
  { id: 9, data: "27", checked: false },
  { id: 10, data: "28", checked: false },
  { id: 11, data: "29", checked: false },
  { id: 12, data: "30", checked: false },
  { id: 13, data: "31", checked: false },
  { id: 14, data: "1", checked: false },
  { id: 15, data: "2", checked: false },
  { id: 16, data: "3", checked: false },
  { id: 17, data: "4", checked: false },
  { id: 18, data: "5", checked: false },
  { id: 19, data: "6", checked: false },
  { id: 20, data: "7", checked: false },
  { id: 21, data: "8", checked: false },
  { id: 22, data: "9", checked: false },
  { id: 23, data: "10", checked: false },
  { id: 24, data: "11", checked: false },
  { id: 25, data: "12", checked: false },
  { id: 26, data: "13", checked: false },
  { id: 27, data: "14", checked: false },
  { id: 28, data: "15", checked: false },
  { id: 29, data: "16", checked: false },
  { id: 30, data: "17", checked: false },
  { id: 31, data: "18", checked: false },
  { id: 32, data: "19", checked: false },
  { id: 33, data: "20", checked: false },
  { id: 34, data: "21", checked: false },
  { id: 35, data: "22", checked: false },
  { id: 36, data: "23", checked: false },
  { id: 37, data: "24", checked: false },
  { id: 38, data: "25", checked: false },
  { id: 39, data: "26", checked: false },
  { id: 40, data: "27", checked: false },
  { id: 41, data: "28", checked: false },
  { id: 42, data: "29", checked: false },
  { id: 43, data: "30", checked: false },
  { id: 44, data: "31", checked: false },
  { id: 45, data: "1", checked: false },
  { id: 46, data: "2", checked: false },
  { id: 47, data: "3", checked: false },
  { id: 48, data: "4", checked: false },
  { id: 49, data: "5", checked: false },
];
const mySubjects = [
  {
    id: 1,
    subject: "Physics",
    class: 6,
    topic: "Law of Thermodynamics",
    started: true,
    date: "18",
    time: "8am to 9am",
    color: "#f6e9eb",
    shadow: "#bf606f",
  },
  {
    id: 2,
    subject: "Physics",
    class: 6,
    topic: "Law of Thermodynamics",
    started: false,
    date: "19",
    time: "8am to 9am",
    color: "#fcf5ec",
    shadow: "#da9a50",
  },
  {
    id: 3,
    subject: "Physics",
    class: 6,
    topic: "Law of Thermodynamics",
    started: false,
    date: "20",
    time: "8am to 9am",
    color: "#eff7ed",
    shadow: "#529d4d",
  },
  {
    id: 4,
    subject: "Physics",
    class: 6,
    topic: "Law of Thermodynamics",
    started: false,
    date: "21",
    time: "8am to 9am",
    color: "#f4ecf8",
    shadow: "#9352ba",
  }
];


const currentMonth = new Date().getMonth();
const CurrentMonthName = monthNames[currentMonth];
const currentYear = new Date().getFullYear();
let date = new Date().getDate();


function Upcomming() {
  const [myElements, setMyElements] = useState(myGridData);
  const [pop, setPop] = useState(false);
  const [isMoreClasses, setIsMoreClasses] = useState(false);
  const [myDate, setMyDate] = useState(date);
  const [mySubs, setMySubs] = useState(mySubjects);

  useEffect(() => {
    setMyDate(date);
    const myArray = myGridData.map((item) => {
      if (String(date) === item.data && item.id >= 14 && item.id <= 44) {
        return { ...item, checked: true };
      }
      return item;
    });
    setMyElements(myArray);
  }, []);

  function handleTouch(id) {
    const arr = [];
    myGridData.map((item) => {
      if (item.id === id && id >= 14 && id <= 44) {
        item.checked = true;
        setMyDate(parseInt(item.data));
        arr.push(item);
      } else {
        item.checked = false;
        arr.push(item);
      }
    });
    setMyElements(arr);
  }
  return (
    <>
      <div className="mt-3 sm:ml-0 relative">
        <h1 className="text-[28px] font-[600] mb-[30px] sm:mb-4">
          Upcomming Classes
        </h1>
        <div className="flex w-[350px] h-[380px] min-w-[350px] max-h-[380px] sm:gap-[8px] sm:w-[500px] sm:h-[350px] sm:min-w-[520px] sm:max-h-[350px] bg-white rounded-sm mt-3 px-2 py-2 relative mb-10">
          <div className="w-[100%] h-[100%] sm:w-[50%] bder sm:h-[100%] rounded-sm flex flex-col px-2 py-1">
            <div className="flex items-center justify-evenly font-[600] py-2">
              <IoIosArrowBack
                className="cursor-pointer"
                onClick={() => setPop((prev) => !prev)}
              />
              {pop ? (
                <div className="absolute flex justify-center items-center gap-4 top-[-35px] right-[0px] sm:top-[-50px] sm:right-[30px] text-[12px] bg-white px-[2px] py-[2px] sm:px-1 sm:py-1">
                  <p>No data to show you!</p>
                  <RxCross2
                    onClick={() => setPop((prev) => !prev)}
                    className="hover:bg-[#f6e8ea] px-2 py-1 text-[30px]"
                  />
                </div>
              ) : null}
              <div className="cursor-pointer">
                {CurrentMonthName}&nbsp;
                {currentYear}
              </div>
              <IoIosArrowForward
                onClick={() => setPop((prev) => !prev)}
                className="cursor-pointer"
              />
            </div>
            <div className="py-1 flex justify-center items-center gap-[10px]">
              <div className="bder  pr-5 pl-2 py-1 rounded-md text-[14px]">
                {CurrentMonthName}&nbsp;{myDate},&nbsp;{currentYear}
              </div>
              <div
                className="bder px-3 py-1 rounded-md text-[14px]"
                style={
                  myDate !== new Date().getDate() ? { fontSize: "12px" } : null
                }
              >
                {myDate === new Date().getDate() ? "Today" : "No Permissions"}
              </div>
            </div>
            <div>
              <div className="myGrid px-6 sm:px-2 mt-1 sm:mt-3 select-none">
                {myElements.map((item) => {
                  return (
                    <div
                      key={item.id}
                      onClick={() => {
                        handleTouch(item.id);
                      }}
                      className={
                        item.checked
                          ? `text-white bg-[#a41c31] rounded-[100%]`
                          : `text-black rounded-[100%]`
                      }
                    >
                      <div
                        className="px-[6px] py-[7px] sm:py-[5px] flex items-center justify-center rounded-[100%] text-[13px] sm:text-[12px] hover:text-white hover:bg-[#a41c31] "
                        key={item.id}
                      >
                        {item.data}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="hidden sm:flex sm:flex-col gap-1 overflow-auto sm:w-[48%] sm:h-[100%] rounded-sm ">
            {mySubs.map((item) => {
              let bgColor = {
                backgroundColor: item.color,
                boxShadow: `-4px 0px 0px 0px ${item.shadow}`,
              };
              return (
                <div
                  key={item.id}
                  className={`flex flex-col ml-1 px-3 rounded-[3px]`}
                  style={bgColor}
                >
                  <div className="flex items-center justify-between py-[2px] text-[14px]">
                    <p className="font-[500]">{item.subject}</p>
                    <p className="font-[500]">Class-{item.class}</p>
                  </div>
                  <h3 className="font-[600] py-[2px]">{item.topic}</h3>
                  <div className="flex items-center justify-between  py-[2px] text-[14px]">
                    <div className="flex items-center">
                      <CiTimer />
                      &nbsp;
                      {item.time}
                    </div>
                    {item.started ? (
                      <div className="cursor-pointer relative bottom-[3px] gap-1 flex items-center  px-2 py-[4px] rounded-full bg-[#a41c31] text-[11px]">
                        <HiVideoCamera className="text-white text-[12px]" />
                        <p className="text-white">Join Class</p>
                      </div>
                    ) : null}
                  </div>
                </div>
              );
            })}
          </div>
          {isMoreClasses ? (
            <div className="absolute flex flex-col gap-1 overflow-auto w-[350px] h-[380px] min-w-[350px] max-h-[380px] bg-transparent top-0 left-0 pt-[48px] sm:hidden px-2 py-1">
              {mySubs.map((item) => {
                let bgColor = {
                  backgroundColor: item.color,
                  boxShadow: `-4px 0px 0px 0px ${item.shadow}`,
                };
                return (
                  <div
                    key={item.id}
                    className={`flex flex-col ml-1 px-3 rounded-[3px]`}
                    style={bgColor}
                  >
                    <div className="flex items-center justify-between py-[2px] text-[14px]">
                      <p className="font-[500]">{item.subject}</p>
                      <p className="font-[500]">Class-{item.class}</p>
                    </div>
                    <h3 className="font-[600] py-[2px]">{item.topic}</h3>
                    <div className="flex items-center justify-between  py-[2px] text-[14px]">
                      <div className="flex items-center">
                        <CiTimer />
                        &nbsp;
                        {item.time}
                      </div>
                      {item.started ? (
                        <div className="cursor-pointer relative bottom-[3px] gap-1 flex items-center  px-2 py-[4px] rounded-full bg-[#a41c31] text-[11px]">
                          <HiVideoCamera className="text-white text-[12px]" />
                          <p className="text-white">Join Class</p>
                        </div>
                      ) : null}
                    </div>
                  </div>
                );
              })}
              <div className="absolute top-[14px] right-4">
                <RxCross2
                  onClick={() => setIsMoreClasses((prev) => !prev)}
                  className="px-2 py-1 text-[32px] rounded-sm hover:bg-[#f8eff1] cursor-pointer"
                />
              </div>
            </div>
          ) : (
            <div className="absolute top-[14px] right-4">
              <AiOutlineMenuFold
                onClick={() => setIsMoreClasses((prev) => !prev)}
                className="px-2 py-1 text-[32px] rounded-sm hover:bg-[#f8eff1] cursor-pointer sm:hidden"
              />
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Upcomming;
