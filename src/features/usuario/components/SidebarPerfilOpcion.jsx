import React from "react";

const SidebarPerfilOpcion = ({ text, active, onClick }) => {
  const baseClasses = "text-[#c4cbd7] font-bold";
  const activeClass = active ? "text-[#014afe] bg-[#e9f0ff] rounded-lg " : "";

  return (
    <div className={`${baseClasses} ${activeClass} w-fit lg:p-3 p-2 `}
    style={{
      color :active ? "#014afe" : "#c4cbd7",
    }}
    >
      <button onClick={onClick}>{text}</button>
    </div>
  );
};

export default SidebarPerfilOpcion;
