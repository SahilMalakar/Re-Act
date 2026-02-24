type CardProps = {
  img: string;
  user: string;
  age: number;
};

// props is a object
// objects is key value pair
// objects can destructured

export const Card = ({ img, user, age }: CardProps) => {
  return (
    <div className="card">
      <img src={img} alt={user} />
      <h1>
        {user}, {age}
      </h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      <button>View Profile</button>
    </div>
  );
};

