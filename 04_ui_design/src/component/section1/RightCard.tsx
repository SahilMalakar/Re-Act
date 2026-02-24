import { RightCardContent } from "./RightCardContent";

export function RightCard({ img, color, tag, id }: any) {
  return (
    <div className="h-full shrink-0 overflow-hidden relative w-80 rounded-4xl">
      <img className="h-full w-full object-cover" src={img} alt="" />
      <RightCardContent color={color} id={id} tag={tag} />
    </div>
  );
}
