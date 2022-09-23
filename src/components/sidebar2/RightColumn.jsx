import React from "react";
import { MdOutlineNotificationsActive } from "react-icons/md";
import { HiOutlinePresentationChartLine } from "react-icons/hi";
import { FiEdit } from "react-icons/fi";
import { IoChatbubblesOutline } from "react-icons/io5";
import { GiSoundWaves } from "react-icons/gi";
import { AiOutlineLineChart } from "react-icons/ai";

import { NavLink, useParams } from "react-router-dom";

import { useState } from "react";

export default function RightColumn() {
  const [isPublishOpen, setIsPublishOpen] = useState(true);
  const [iconColors, setIconColors] = useState({
    notification: "#f55661",
    summary: "#f55661",
    publish: "#f55661",
    engage: "#f55661",
    listen: "#f55661",
    report: "#f55661",
  });
  const { companyName } = useParams();

  // Some logic with company prop to retrieve data and set relative actions, maybe a useEffect
  // For now, some boilerplate design
  return (
    <>
      <NavLink
        to={`${companyName}/notifications`}
        style={({ isActive }) => ({
          color: isActive ? "#f55661" : "#fffefe",
          fontWeight: isActive ? "800" : "inherit",
        })}
      >
        <div
          className="right-col-link py-3"
          onMouseOver={() =>
            setIconColors({ ...iconColors, notification: "#fffefe" })
          }
          onMouseOut={() =>
            setIconColors({ ...iconColors, notification: "#f55661" })
          }
        >
          {" "}
          <MdOutlineNotificationsActive
            size={"20px"}
            color={iconColors.notification}
          />{" "}
          <span className="px-2 self-center">NOTIFICATIONS </span>{" "}
          <span className="px-2 border-solid border-[1px] border-[#5c9b92] rounded">
            29
          </span>
        </div>
      </NavLink>

      <NavLink
        to={`${companyName}/summary`}
        style={({ isActive }) => ({
          color: isActive ? "#f55661" : "#fffefe",
          fontWeight: isActive ? "800" : "inherit",
        })}
      >
        <div
          className="right-col-link"
          onMouseOver={() =>
            setIconColors({ ...iconColors, summary: "#fffefe" })
          }
          onMouseOut={() =>
            setIconColors({ ...iconColors, summary: "#f55661" })
          }
        >
          {" "}
          <HiOutlinePresentationChartLine
            size={"20px"}
            color={iconColors.summary}
          />{" "}
          <span className="px-2 self-center align-middle h-full">SUMMARY </span>
          <span className="flex-1"></span>
          <span className="see-more">+</span>
        </div>
      </NavLink>

        <div
          className="right-col-link"
          onMouseOver={() =>
            setIconColors({ ...iconColors, publish: "#fffefe" })
          }
          onMouseOut={() =>
            setIconColors({ ...iconColors, publish: "#f55661" })
          }
          onClick={() => setIsPublishOpen(!isPublishOpen)}
        >
          {" "}
          <FiEdit size={"20px"} color={iconColors.publish} />{" "}
          <span className="px-2 self-center align-middle h-full text-[#fffefe]">PUBLISH </span>
          <span className="flex-1"></span>
          <span className="see-more">{isPublishOpen ? "-" : "+"}</span>
        </div>
        {isPublishOpen && (
          <div className="bg-[#32363a] text-white pl-4">
            <ul className="py-2 list-disc">
              <NavLink
                to={`${companyName}/publish/compose`}
                style={({ isActive }) => ({
                  color: isActive ? "#f55661" : "#fffefe",
                  fontWeight: isActive ? "800" : "inherit",
                })}
              >
                <li className="ml-4 opacity-90">Compose</li>
              </NavLink>

              <NavLink
                to={`${companyName}/publish/feed`}
                style={({ isActive }) => ({
                  color: isActive ? "#f55661" : "#fffefe",
                  fontWeight: isActive ? "800" : "inherit",
                })}
              >
                <li className="ml-4 opacity-90">Feed</li>
              </NavLink>
            </ul>
          </div>
        )}

      <NavLink
        to={`${companyName}/engage`}
        style={({ isActive }) => ({
          color: isActive ? "#f55661" : "#fffefe",
          fontWeight: isActive ? "800" : "inherit",
        })}
      >
        <div
          className="right-col-link"
          onMouseOver={() =>
            setIconColors({ ...iconColors, engage: "#fffefe" })
          }
          onMouseOut={() => setIconColors({ ...iconColors, engage: "#f55661" })}
        >
          {" "}
          <IoChatbubblesOutline size={"20px"} color={iconColors.engage} />{" "}
          <span className="px-2 self-center align-middle h-full">ENGAGE </span>
          <span className="flex-1"></span>
          <span className="see-more">+</span>
        </div>
      </NavLink>
      <NavLink
        to={`${companyName}/listen`}
        style={({ isActive }) => ({
          color: isActive ? "#f55661" : "#fffefe",
          fontWeight: isActive ? "800" : "inherit",
        })}
      >
        <div
          className="right-col-link"
          onMouseOver={() =>
            setIconColors({ ...iconColors, listen: "#fffefe" })
          }
          onMouseOut={() => setIconColors({ ...iconColors, listen: "#f55661" })}
        >
          {" "}
          <GiSoundWaves size={"20px"} color={iconColors.listen} />{" "}
          <span className="px-2 self-center align-middle h-full">LISTEN </span>
          <span className="flex-1"></span>
          <span className="see-more">+</span>
        </div>
      </NavLink>
      <NavLink
        to={`${companyName}/report`}
        style={({ isActive }) => ({
          color: isActive ? "#f55661" : "#fffefe",
          fontWeight: isActive ? "800" : "inherit",
        })}
      >
        <div
          className="right-col-link"
          onMouseOver={() =>
            setIconColors({ ...iconColors, report: "#fffefe" })
          }
          onMouseOut={() => setIconColors({ ...iconColors, report: "#f55661" })}
        >
          {" "}
          <AiOutlineLineChart size={"20px"} color={iconColors.report} />{" "}
          <span className="px-2 self-center align-middle h-full">REPORT </span>
          <span className="flex-1"></span>
          <span className="see-more">+</span>
        </div>
      </NavLink>
    </>
  );
}
