import Arrow from "./Arrow";
import HeroText from "./HeroText";


function LeftContent() {
  return (
    <div className="h-full flex flex-col justify-between w-1/3 p-4">
      <HeroText />
      <Arrow/>
    </div>
  );
}

export default LeftContent;
