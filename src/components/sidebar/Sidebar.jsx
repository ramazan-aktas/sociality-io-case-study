import React from "react";
import { useState, useEffect } from "react";
import control from "../../img/control.png";
import RightColumn from "./RightColumn";
import LogoSection from "./left_column/LogoSection";
import ListCustomers from "./left_column/ListCustomers";

const Sidebar = () => {
  const [open, setOpen] = useState(true);

  // On first load, if the device is a typical phone, initial state of menu is closed
  // Well, collapsed might be a better term
  useEffect(() => {
    const width = window.innerWidth;
    if (width < 480) {
      setOpen(false);
    }
    return () => {
      console.log("Menu set closed as default");
    };
  }, []);

  return (
    //Sidebar container
    <div className="bg-[#f5f7f8] col-span-2 h-full">
      {
        // If sidebar is open, set width to screen width on mobile, full width of its container on large screens and above
      }
      <div
        className={` ${
          open ? "w-screen lg:w-full" : "w-full lg:w-1/5 "
        } h-full relative`}
      >
        {
          // Rotate collapse button as it is clicked
          // Hide button on large screens and above
        }
        <img
          src={control}
          alt=""
          className={`absolute cursor-pointer lg:-right-3 right-1 ${
            !open && "-right-4"
          } top-3 w-8 border-dark-purple
           border-2 rounded-full xl:invisible ${!open && "rotate-180"}`}
          onClick={() => setOpen(!open)}
        />
        <LogoSection openness={!open} />
        <div className="grid grid-cols-7 min-h-full">
          <ListCustomers openness={!open} />
          {
            // Hide right column when it is collapsed
          }
          {open && (
            <div className="col-span-6 bg-[#44484d] min-h-full">
              <RightColumn />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
