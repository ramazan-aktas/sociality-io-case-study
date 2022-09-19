import { IconContext } from "react-icons";
import { AiOutlineRetweet } from "react-icons/ai";
import { IoEyeOutline } from "react-icons/io5";
import { BsChatRight } from "react-icons/bs";
import { AiOutlineHeart } from "react-icons/ai";
import { AiOutlineLike } from "react-icons/ai";
import { BsShare } from "react-icons/bs";

export default function PostMeta({ channel }) {
  if (channel === "twitter") {
    return (
      <IconContext.Provider value={{ color: "#acacac", size:"1.25rem", className: "flex justify-center items-center" }}>
        <div className="grid grid-cols-5">
          <div className="px-1 svg-icon font-medium flex justify-center items-center text-xs">
            <AiOutlineHeart /> <span className="ml-2 text-[#444444]">0</span>
          </div>
          <div className="px-1 svg-icon font-medium flex justify-center items-center text-xs">
            <AiOutlineRetweet /> <span className="ml-2 text-[#444444]">0</span>
          </div>
          <div className="px-1 svg-icon font-medium flex justify-center items-center text-xs">
            <BsChatRight /> <span className="ml-2 text-[#444444]">0</span>
          </div>
          <div className="px-1 svg-icon font-medium flex justify-center items-center text-xs">
            <IoEyeOutline /> <span className="ml-2 text-[#444444]">0</span>
          </div>
        </div>
      </IconContext.Provider>
    );
  }else {
    return (
      <IconContext.Provider value={{ color: "#acacac", size:"1.25rem", className: "flex justify-center items-center" }}>
        <div className="grid grid-cols-5 inset-x-0 bottom-0">
          <div className="px-1 svg-icon font-medium flex justify-center items-center text-xs">
            <AiOutlineLike /> <span className="ml-2 text-[#444444]">0</span>
          </div>
          <div className="px-1 svg-icon font-medium flex justify-center items-center text-xs">
            <BsChatRight /> <span className="ml-2 text-[#444444]">0</span>
          </div>
          <div className="px-1 svg-icon font-medium flex justify-center items-center text-xs">
            <BsShare /> <span className="ml-2 text-[#444444]">0</span>
          </div>
          <div className="px-1 svg-icon font-medium inline-flex justify-center items-center text-xs">
            <IoEyeOutline /> <span className="ml-2 text-[#444444] justify-center items-center">0</span>
          </div>
        </div>
      </IconContext.Provider>
    );
  }
}
