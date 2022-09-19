import React from "react";
import { useState } from "react";
import sociality_logo from "../../img/Sociality-logo.png";
import control from "../../img/control.png";
import logo1 from "../../img/Logo1.png";
import logo2 from "../../img/Logo2.png";
import logo3 from "../../img/Logo3.png";
import logo4 from "../../img/Logo4.png";
import logo5 from "../../img/Logo5.png";
import logo6 from "../../img/Logo6.png";
import RightColumn from "./RightColumn";

const Sidebar = () => {
    const [open, setOpen] = useState(false);

  return (
      <div
        className={` ${
          open ? "w-screen lg:w-full" : "w-full lg:w-1/4 "
        } h-full relative`}
      >
        <img
          src={control}
          className={`absolute cursor-pointer lg:-right-3 right-1 top-3 w-8 border-dark-purple
           border-2 rounded-full  ${!open && "rotate-180"}`}
          onClick={() => setOpen(!open)}
        />
        <div className={`bg-[#303438] ${!open && "lg:w-full"} bg-[#31363b] h-12`}>
          <img src={sociality_logo} className="mx-auto py-3"></img>
        </div>
        {/* Logo Section END*/}
        <div className="grid grid-cols-5 min-h-full">
          <div className={`bg-[#303438] ${!open && "col-span-full"} min-h-full`}>
            <img src={logo1} className="sidebar-logo"/>
            <img src={logo2} className="sidebar-logo"/>
            <img src={logo3} className="sidebar-logo"/>
            <img src={logo4} className="sidebar-logo opacity-90"/>
            <img src={logo5} className="sidebar-logo"/>
            <img src={logo6} className="sidebar-logo"/>

          </div>
          {open&&<div className="col-span-4 bg-[#44484d] min-h-full">
            <RightColumn/>
            </div>}
        </div>
      </div>
  );
};

export default Sidebar;
