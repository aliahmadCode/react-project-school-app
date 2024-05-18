import { useState, useEffect, useRef } from "react";

import Sidebar from "./components/Sidebar";
import Main from "./components/Main/Main";
function App() {
  return (
    <>
      <div className="lg:flex">
        <div>
          <Sidebar />
        </div>
        <div className="mx-auto lg:mx-4">
          <Main />
        </div>
      </div>
    </>
  );
}

export default App;
