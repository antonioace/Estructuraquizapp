import React from "react";
import Sidebar from "./Sidebar";

function DashBoardLayout({ children }) {
  return (
    <div className="w-[100%] h-[100%] bg-[#f4f4f7] min-h-screen p-[100px]">
      <Sidebar>{children}</Sidebar>
    </div>
  );
}

export default DashBoardLayout;
