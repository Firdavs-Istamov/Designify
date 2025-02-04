import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <div className="flex items-center gap-[8px]">
        <NavLink
          to={"/"}
          className="font-medium text-[15px] leading-[20.25px] text-[#211F26] p-[8px] rounded-[10px] duration-300 hover:rounded-[10px] hover:bg-blue-300"
        >
          Home
        </NavLink>
        <NavLink
          to={"/#"}
          className="font-medium text-[15px] leading-[20.25px] text-[#211F26] p-[8px] rounded-[10px] duration-300 hover:rounded-[10px] hover:bg-blue-300"
        >
          About us
        </NavLink>
        <NavLink
          to={"/#"}
          className="font-medium text-[15px] leading-[20.25px] text-[#211F26] p-[8px] rounded-[10px] duration-300 hover:rounded-[10px] hover:bg-blue-300"
        >
          Services
        </NavLink>
        <NavLink
          to={"/#"}
          className="font-medium text-[15px] leading-[20.25px] text-[#211F26] p-[8px] rounded-[10px] duration-300 hover:rounded-[10px] hover:bg-blue-300"
        >
          Projects
        </NavLink>
        <NavLink
          to={"/#"}
          className="font-medium text-[15px] leading-[20.25px] text-[#211F26] p-[8px] rounded-[10px] duration-300 hover:rounded-[10px] hover:bg-blue-300"
        >
          Reviews
        </NavLink>
        <NavLink
          to={"/#"}
          className="font-medium text-[15px] leading-[20.25px] text-[#211F26] p-[8px] rounded-[10px] duration-300 hover:rounded-[10px] hover:bg-blue-300"
        >
          FAQ
        </NavLink>
      </div>
    </nav>
  );
}

export default Navbar;
