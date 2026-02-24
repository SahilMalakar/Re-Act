import { ArrowBigRight } from "lucide-react";


type RightCardContentProps = {
  color: string;
  tag: string;
  id: number;
};

export function RightCardContent({ color, tag, id }: RightCardContentProps) {
  return (
    <>
      <div className="absolute top-0 left-0 h-full w-full p-8 flex flex-col justify-between">
        <h2 className="bg-white text-xl font-semibold rounded-full h-12 w-12 flex justify-center items-center">
          {id + 1}
        </h2>
        <div>
          <p className="text-shadow-2xs text-xl leading-relaxed text-white mb-14">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure
            accusamus cupiditate voluptatibus mollitia alias tempora.
          </p>
          <div className="flex justify-between">
            <button
              style={{ backgroundColor: color }}
              className="text-white font-medium px-8 py-2 rounded-full"
            >
              {tag}
            </button>
            <button className="text-white font-medium px-3 py-2 rounded-full">
              <div className="bg-blue-500 p-1 rounded-2xl">
                <ArrowBigRight className="bg-blue-500 rounded-2xl" />
              </div>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
