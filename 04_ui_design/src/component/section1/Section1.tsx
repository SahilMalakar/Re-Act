import type { Section1Props } from "../../lib/Data";
import Navbar from "./Navbar";
import PageContent1 from "./PageContent1";


export default function Section1({ users }: Section1Props) {
  return (
    <div className="h-screen w-full">
      <Navbar />
      <PageContent1 users={users} />
    </div>
  );
}
