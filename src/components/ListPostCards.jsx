import data from "../data.json";
import { v4 as uuid } from "uuid";
import Card from "./post-card/Card";
export default function ListPostCards({ username }) {
  const innerData = data.posts_by_date;
  const byDate = Object.keys(innerData)
    .reverse()
    .map((key) => (
      <>
        <div
          key={uuid()}
          className="col-span-full font-barlow text-[22px] text-[#959595]"
        >
          {key}
        </div>
        {Object.values(innerData[key])
          //Some filtering later
          .map((obj) => (
            <Card
              key={uuid()}
              status={obj.status}
              message={obj.entry.message}
              imageURL={obj.entry.image[0]}
              dateTime={obj.published_at}
              channel={obj.account.channel}
            />
          ))}
      </>
    ));

  return <>{byDate}</>;
}
