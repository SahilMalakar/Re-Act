import type { Section1Props } from "../../lib/Data";
import LeftContent from "./LeftContent";
import RightContent from "./RightContent";

export default function PageContent1({ users }: Section1Props) {
  return (
    <div className="pb-18 pt-6 h-[90vh]  px-18 flex items-center gap-10 ">
      <LeftContent />
      <RightContent users={users} />
    </div>
  );
}
