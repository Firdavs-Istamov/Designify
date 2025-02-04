import React, { useState } from "react";
import { OneDataIcon, SiteLogo, MenuIcon } from "../../assets/images";
import Navbar from "../Navbar";
import Button from "../Button";

function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="px-4 py-3 bg-[#EBE7F6] flex items-center justify-between relative">
      <div className="flex items-center gap-2">
        <SiteLogo />
        <OneDataIcon />
      </div>
      <div className="flex items-center gap-4 lg:hidden">
        <Button
          text={"Let’s connect"}
          extraStyle={
            "bg-[#5835AB] text-[#FBFAFD] px-4 py-2 text-sm hidden md:block"
          }
        />
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-[#211F26] p-2 flex items-center gap-2"
        >
          <MenuIcon />
          <span className="hidden md:block">Menu</span>
        </button>
      </div>
      <div
        className={`${
          menuOpen ? "flex" : "hidden"
        } absolute top-14 left-0 w-full bg-[#EBE7F6] flex-col items-center shadow-md lg:hidden`}
      >
        <Navbar />
      </div>
      <div className="hidden lg:flex items-center space-x-6">
        <Navbar />
        <Button
          text={"Let’s connect"}
          extraStyle={"bg-[#5835AB] text-[#FBFAFD] px-6 py-3 text-base"}
        />
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-[#211F26] p-2"
        >
          <MenuIcon />
        </button>
      </div>
    </header>
  );
}

export default SiteHeader;
