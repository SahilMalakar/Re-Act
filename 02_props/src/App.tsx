import {Card} from "./components/Card";

const App = () => {
  // App ---> parent
  // Card ----> child
  // props pass from (parent --> child)
  return (
    <div className="parent">
      <Card
        user="Sahil"
        age={24}
        img="https://images.unsplash.com/photo-1751097006268-ae4601fcb117?q=80&w=1518&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />
      <Card
        user="Sweety"
        age={23}
        img="https://images.unsplash.com/photo-1752801516481-cfb8c47ee9a3?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />

    </div>
  );
};

export default App;