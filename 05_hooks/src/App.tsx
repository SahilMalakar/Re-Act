import { useState } from "react";

export default function App() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(e: React.ChangeEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log(`Form submitted with name: ${name}, password: ${password}`);
  }

  return (
    <>
      <div className="h-screen bg-black text-white flex items-center justify-center">
        <form
          onSubmit={handleSubmit}
          className="bg-gray-900 p-8 rounded shadow-md"
        >
          <input
            type="text"
            value={name}
            onChange={(e) => {
              console.log(e.target.value);

              setName(e.target.value);
            }}
            placeholder="Username"
            className="bg-gray-800 text-white p-2 rounded m-2"
          />
          <input
            type="password"
            value={password}
            onChange={(e) => {
              console.log(e.target.value);

              setPassword(e.target.value);
            }}
            placeholder="Password"
            className="bg-gray-800 text-white p-2 rounded m-2"
          />
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Login
          </button>
        </form>
      </div>
    </>
  );
}
