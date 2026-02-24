import Section1 from "./component/section1/Section1";
import Section2 from "./component/section2/Section2";
import { users } from "./lib/Data";

function Page() {
  return (
    <>
      <Section1 users ={users} />
      <Section2/>
    </>
  );
}

export default Page;
