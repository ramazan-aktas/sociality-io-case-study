import React from "react";
import logo1 from "../../../img/Logo1.png";
import logo2 from "../../../img/Logo2.png";
import logo3 from "../../../img/Logo3.png";
import logo4 from "../../../img/Logo4.png";
import logo5 from "../../../img/Logo5.png";
import logo6 from "../../../img/Logo6.png";
import { NavLink } from "react-router-dom";

export default function ListCustomers({ openness }) {
  return (
    <div className={`bg-[#303438] ${openness && "col-span-full"} min-h-full`}>
      <NavLink
        to="/name1"
        style={({ isActive }) => ({
          opacity: isActive ? 0.9 : 0.3,
        })}
      >
        <img src={logo1} alt="" className="sidebar-logo" />
      </NavLink>
      <NavLink
        to="/name2"
        style={({ isActive }) => ({
          opacity: isActive ? 0.9 : 0.3,
        })}
      >
        <img src={logo2} alt="" className="sidebar-logo" />
      </NavLink>
      <NavLink
        to="/name3"
        style={({ isActive }) => ({
          opacity: isActive ? 0.9 : 0.3,
        })}
      >
        <img src={logo3} alt="" className="sidebar-logo" />
      </NavLink>
      <NavLink
        to="/socialorientation_test"
        style={({ isActive }) => ({
          opacity: isActive ? 0.9 : 0.3,
        })}
      >
        <img src={logo4} alt="" className="sidebar-logo" />
      </NavLink>
      <NavLink
        to="/name5"
        style={({ isActive }) => ({
          opacity: isActive ? 0.9 : 0.3,
        })}
      >
        <img src={logo5} alt="" className="sidebar-logo" />
      </NavLink>
      <NavLink
        to="/name6"
        style={({ isActive }) => ({
          opacity: isActive ? 0.9 : 0.3,
        })}
      >
        <img src={logo6} alt="" className="sidebar-logo" />
      </NavLink>
    </div>
  );
}
