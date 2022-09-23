import PostImage from "./CardComponents.jsx/PostImage";
import PublishedAt from "./CardComponents.jsx/PublishedAt";
import Actions from "./CardComponents.jsx/Actions";
import EntryMessage from "./CardComponents.jsx/EntryMessage";
import PostMeta from "./CardComponents.jsx/PostMeta";
import CardSidebar from "./CardComponents.jsx/CardSidebar";

export default function Card({ channel, status, dateTime, message, imageURL }) {
    const cardSidebar = () => {
        if (status===0){
            return "h-full bg-[#f7bf38] rounded-l-md border-l-2 border-t-2 border-b-2 border-solid border-color[#e5e6ee] flex justify-center items-center col-span-1"
        }else if (status===1){
            return "h-full bg-[#3ac183] rounded-l-md border-l-2 border-t-2 border-b-2 border-solid border-color[#e5e6ee] flex justify-center items-center col-span-1"
        }else if (status===2){
            return "h-full bg-[#67b1f2] rounded-l-md border-l-2 border-t-2 border-b-2 border-solid border-color[#e5e6ee] flex justify-center items-center col-span-1"
        }else if (status===3){
            return "h-full bg-[#acacac] rounded-l-md border-l-2 border-t-2 border-b-2 border-solid border-color[#e5e6ee] flex justify-center items-center col-span-1"
        }else if (status===4){
          return "h-full bg-[#fb6450] rounded-l-md border-l-2 border-t-2 border-b-2 border-solid border-color[#e5e6ee] flex justify-center items-center col-span-1"
      }
    }
  return (
    <div className="grid grid-cols-12 h-auto rounded-r-md">
      {/* Left Logo Column */}
      <div className={cardSidebar()}>
        <CardSidebar channel={channel}/>
      </div>
      {/* Left Logo Column END*/}

      {/* Right Content Column */}
      <div className="col-span-11 flex flex-col bg-white border-t-2 border-b-2 border-r-2 border-solid border-color[#e5e6ee] rounded-r-md pt-7 px-5">
        <div className="grid grid-cols-2 pb-6">
          {/* Publish DateTime */}

          <PublishedAt dateTime={dateTime} />

          {/* Publish DateTime END*/}

          {/* Actions */}
          <div className="pt-1">
            <Actions status={status} />
          </div>
          {/* Actions END*/}
        </div>

        <div className="col-span-full pb-6">
          <EntryMessage message={message} />
        </div>

        <PostImage url = {imageURL}/>
        <div className="flex-1"></div>
        <div className="col-span-full pt-4 pb-7">
        <PostMeta channel={channel}/>
        </div>
        
      </div>
      {/* Right Content Column END*/}
    </div>
  );
}
