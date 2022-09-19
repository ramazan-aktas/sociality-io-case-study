import { IconContext } from "react-icons";
import { RiFacebookFill } from "react-icons/ri";
import { RiTwitterFill } from "react-icons/ri";
import { RiInstagramLine } from "react-icons/ri";
import { RiQuestionMark } from "react-icons/ri";

export default function CardSidebar({ channel }) {
  if (channel === "twitter") {
    return (
      <IconContext.Provider value={{ color: "#fff", size: "2rem" }}>
        <RiTwitterFill />
      </IconContext.Provider>
    );
  } else if (channel === "instagrambusiness") {
    return (
      <IconContext.Provider value={{ color: "#fff", size: "2rem" }}>
        <RiInstagramLine />
      </IconContext.Provider>
    );
  } else if (channel === "facebook") {
    return (
      <IconContext.Provider value={{ color: "#fff", size: "2rem" }}>
        <RiFacebookFill />
      </IconContext.Provider>
    );
  } else {
    <IconContext.Provider value={{ color: "#fff", size: "2rem" }}>
      <RiQuestionMark />
    </IconContext.Provider>;
  }
}
