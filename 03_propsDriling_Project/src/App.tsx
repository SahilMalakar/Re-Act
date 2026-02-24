import Card from "./components/Card";
import { jobOpenings } from "./lib/data";

const App = () => {
  
  return (
    <div className="parent">
      {jobOpenings.map(function (elem, idx) {
        return (
          <div key={idx}>
            <Card
              company={elem.companyName}
              datePosted={elem.datePosted}
              post={elem.post}
              tag1={elem.tag1}
              brandLogo={elem.brandLogo}
              pay={elem.pay}
              tag2={elem.tag2}
            />
          </div>
        );
      })}
    </div>
  );
};

export default App;
