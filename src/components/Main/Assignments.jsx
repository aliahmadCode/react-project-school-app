import { useState, useEffect, useRef } from "react";

const assignment = {
  assignNo: 3,
  average: 40,
};
const percent = (assignment.average / 100) * 100;

function Assignments() {
  return (
    <>
      <div className="mt-2">
        <h1 className="text-[28px] font-[600]">Last Deliverable</h1>
        <div className="bg-white flex w-[350px] h-[270px] min-w-[350px] max-h-[270px] sm:gap-[8px] sm:w-[400px] sm:h-[250px] sm:max-w-[400px] sm:min-w-[370px] sm:max-h-[250px] rounded-sm mt-3 px-2 py-2 ">
          <div className="flex flex-col items-center w-full h-full gap-2 px-3 py-2 ">
            <div className="py-2 font-[600]">
              Assignement {assignment.assignNo}
            </div>
            <div className="flex items-center gap-6 text-[12px]">
              <div
                style={
                  percent >= 90
                    ? {
                        borderTop: "10px solid #a41c31",
                        borderRight: "10px solid #a41c31",
                        borderBottom: "10px solid #a41c31",
                        borderLeft: "10px solid #a41c31",
                      }
                    : percent >= 80
                    ? {
                        borderTop: "10px solid #a41c31",
                        borderRight: "10px solid #a41c31",
                        borderBottom: "10px solid #a41c31",
                      }
                    : percent >= 60
                    ? {
                        borderTop: "10px solid #a41c31",
                        borderRight: "10px solid #a41c31",
                        borderBottom: "10px solid #a41c31",
                      }
                    : percent >= 40
                    ? {
                        borderTop: "10px solid #a41c31",
                        borderRight: "10px solid #a41c31",
                      }
                    : percent >= 20
                    ? {
                        borderTop: "10px solid #a41c31",
                      }
                    : null
                }
                className="flex flex-col items-center marks px-[16px] py-7"
              >
                <h3 className="font-[500] text-[#5f5f5f]">Submissions</h3>
                <div className="font-[700] text-[16px]">
                  {(assignment.average / 100) * 100}%
                </div>
              </div>
              <div
                style={
                  percent >= 90
                    ? {
                        borderTop: "10px solid #a41c31",
                        borderRight: "10px solid #a41c31",
                        borderBottom: "10px solid #a41c31",
                        borderLeft: "10px solid #a41c31",
                      }
                    : percent >= 80
                    ? {
                        borderTop: "10px solid #a41c31",
                        borderRight: "10px solid #a41c31",
                        borderBottom: "10px solid #a41c31",
                      }
                    : percent >= 60
                    ? {
                        borderTop: "10px solid #a41c31",
                        borderRight: "10px solid #a41c31",
                        borderBottom: "10px solid #a41c31",
                      }
                    : percent >= 40
                    ? {
                        borderTop: "10px solid #a41c31",
                        borderRight: "10px solid #a41c31",
                      }
                    : percent >= 20
                    ? {
                        borderTop: "10px solid #a41c31",
                      }
                    : null
                }
                className="flex flex-col items-center marks px-5 py-9"
              >
                <h3 className="font-[500] text-[#5f5f5f]">Percent Marks</h3>
                <div className="font-[700] text-[16px]">
                  {(assignment.average / 100) * 100}%
                </div>
              </div>
            </div>
            <div className="flex items-center gap-3 sm:gap-5 text-[14px]">
              <div></div>
              <div className="mt-[1px] sm:pr-[2px] font-[600] text-[#5f5f5f]">Submissions: {assignment.average}/100</div>
              <div className="sm:pr-4 font-[600] text-[#5f5f5f]">Average Marks: {assignment.average}/100</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Assignments;
