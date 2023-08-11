import React from "react";
import Sidebar from "./Sidebar";

function DashBoardLayout({ children }) {
  return (
    <div className="w-[100%] h-[100%] bg-[#f6f6f6] min-h-screen pt-[100px]">
      <Sidebar>
        <div className="bg-white lg:m-5 rounded-2xl w-[100%] h-[900px] max-w-screen-xl overflow-y-auto">
          {children}
        </div>
      </Sidebar>
    </div>
  );
}

export default DashBoardLayout;
