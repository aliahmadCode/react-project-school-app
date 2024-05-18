import { useState, useEffect, useRef } from "react";
import { BiMath } from "react-icons/bi";
import { SlChemistry } from "react-icons/sl";
import { TbMathMaxMin } from "react-icons/tb";
import { RiEnglishInput } from "react-icons/ri";
import { TbMathFunction } from "react-icons/tb";
const classes = [
  {
    id: 1,
    subject: "Mathematics",
    icon: BiMath,
    lectures: 22,
    class: "6-B",
    lectureToken: 10,
    students: 55,
    bgColor: "#fcf5ec",
    color: "#d37509",
  },
  {
    id: 2,
    subject: "Chemistry",
    icon: SlChemistry,
    lectures: 22,
    class: "6-B",
    lectureToken: 10,
    students: 55,
    bgColor: "#e7f3e7",
    color: "#108307",
  },
  {
    id: 3,
    subject: "Statistics",
    icon: TbMathMaxMin,
    lectures: 22,
    class: "6-B",
    lectureToken: 10,
    students: 55,
    bgColor: "#eee4f5",
    color: "#65089c",
  },
  {
    id: 4,
    subject: "English",
    icon: RiEnglishInput,
    lectures: 22,
    class: "6-B",
    lectureToken: 10,
    students: 55,
    bgColor: "#fcf5ec",
    color: "#d37509",
  },
  
];

function Classes() {
  const [clas, setClas] = useState(classes);
  return (
    <>
      <div className="mt-2">
        <h1 className="text-[28px] font-[600]">Announcements</h1>
        <div className="bg-white flex w-[350px] h-[340px] min-w-[350px] max-h-[380px] sm:gap-[8px] sm:w-[470px] sm:h-[250px] sm:min-w-[470px] sm:max-h-[250px] rounded-sm mt-3 px-3 py-3">

          <div className="flex flex-col w-full h-full gap-2 overflow-auto">
            <div className="flex items-center justify-between pl-2 sm:px-2 py-2 text-[14px]">
              <h3>Subject</h3>
              <div className="flex gap-[7px] sm:gap-5">
                <h3>Class</h3>
                <h3>Lecture Token</h3>
                <h3>Students</h3>
              </div>
            </div>
            {clas.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.id}
                  className="flex items-center justify-between bder px-2 py-2 text-[14px] rounded-md"
                >
                  <div className="flex items-center gap-1 sm:gap-2">
                    <Icon
                      className="text-[32px] rounded-md px-1 py-1"
                      style={{
                        backgroundColor: item.bgColor,
                        color: item.color,
                      }}
                    />
                    <div className="flex flex-col text-[14px] leading-[17px]">
                      <h3 className="font-[600]">{item.subject}</h3>
                      <p className="text-[10px] italic">
                        <span className="">{item.lectures}</span> Lectures
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-[54px] sm:gap-[72px] pr-2">
                    <h3>{item.class}</h3>
                    <h3>{item.lectureToken}</h3>
                    <h3>{item.students}</h3>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default Classes;
