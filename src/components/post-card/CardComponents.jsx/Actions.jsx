import { IconContext } from "react-icons";
import { IoEllipsisHorizontalCircle } from "react-icons/io5";
import { HiBan } from "react-icons/hi";
import { HiOutlineCheck } from "react-icons/hi";
import { HiOutlineTrash } from "react-icons/hi";
export default function Actions({ status }) {
  const returnIconsByStatus = () => {
    if (status === 0) {
      return <HiOutlineCheck/>;
    } else if (status === 1) {
      return <HiBan/>;
    } else {
      return "";
    }
  };
  return (
    <IconContext.Provider value={{ color: "#d5d5d5", size: "16px"}}>
      <div className="flex float-right">
        <span className="px-1 svg-icon font-medium">
          {returnIconsByStatus()}
        </span>
        <span className="px-1 svg-icon font-medium">
          <HiOutlineTrash/>
        </span>
        <span className="pl-1 svg-icon font-medium">
          <IoEllipsisHorizontalCircle/>
        </span>
      </div>
    </IconContext.Provider>
  );
}
