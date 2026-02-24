import { Bookmark } from "lucide-react";
type CardProps = {
  brandLogo: string;
  company: string;
  datePosted: string;
  post: string;
  tag1: string;
  tag2: string;
  pay: string;
};

const Card = ({
  brandLogo,
  company,
  datePosted,
  post,
  tag1,
  tag2,
  pay,
}: CardProps) => {
  return (
    <div className="card">
      <div>
        <div className="top">
          <img src={brandLogo} alt="nachioooooo" />
          <button>
            Save <Bookmark size={10} />{" "}
          </button>
        </div>
        <div className="center">
          <h3>
            {company} <span>{datePosted}</span>
          </h3>
          <h2>{post}</h2>
          <div className="tag">
            <h4>{tag1}</h4>
            <h4>{tag2}</h4>
          </div>
        </div>
      </div>
      <div className="bottom">
        <div>
          <h3>{pay}</h3>
          <p>Mumbai, India</p>
        </div>
        <button>Apply Now</button>
      </div>
    </div>
  );
};

export default Card;
