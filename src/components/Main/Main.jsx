import { useState, useEffect, useRef } from "react";
import Header from "./Header";
import Annoucement from "./Annoucement";
import Upcomming from "./Upcomming";
import Classes from "./Classes";
import Assignments from "./Assignments";
function Main() {
  return (
    <>
      <div className="lg:w-[72vw] px-3 lg:px-0">
        <Header />
        <div className="flex flex-wrap gap-3 justify-center">
          <Annoucement />
          <Upcomming />
          <Classes />
          <Assignments />
        </div>
        <div className="mb-40 sm:mb-10"></div>
      </div>
    </>
  );
}

export default Main;
