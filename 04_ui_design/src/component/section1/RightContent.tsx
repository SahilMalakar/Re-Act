import type { DataType } from "../../lib/Data";
import { RightCard } from "./RightCard";

function RightContent({ users }: any) {
  return (
    <div
      id="right"
      className="h-full flex rounded-4xl overflow-x-auto flex-nowrap gap-10 p-6 w-2/3"
    >
      {users.map(function (elem: DataType, idx: number) {
        return (
          <RightCard
            key={idx}
            color={elem.color}
            img={elem.img}
            tag={elem.tag}
            id={idx}
          />
        );
      })}
    </div>
  );
}

export default RightContent;
