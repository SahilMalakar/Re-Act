import { useState } from "react";
import AddNotes from "./components/AddNotes";
import RecentNotes from "./components/RecentNotes";

export type Note = {
  title: string;
  description: string;
};

export default function App() {
  const [notes, setNotes] = useState<Note[]>([]);

  function handleAdd(title: string, description: string) {
    setNotes((prev) => [...prev, { title, description }]);
  }

  function handleDelete(index: number) {
    setNotes((prev) => prev.filter((_, i) => i !== index));
  }

  return (
    <div className="min-h-screen bg-black text-white px-10 py-12">
      <div className="flex gap-10">
        <div className="w-1/2 pr-10 border-r border-gray-600">
          <AddNotes onAdd={handleAdd} />
        </div>

        <div className="w-1/2 pl-10">
          <RecentNotes notes={notes} onDelete={handleDelete} />
        </div>
      </div>
    </div>
  );
}
