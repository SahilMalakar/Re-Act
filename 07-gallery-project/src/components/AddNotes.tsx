import { useState } from "react";

type AddNotesProps = {
  onAdd: (title: string, description: string) => void;
};

export default function AddNotes({ onAdd }: AddNotesProps) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  function handleSubmit(e: React.ChangeEvent) {
    e.preventDefault();

    if (!title.trim()) return;

    onAdd(title, description);

    setTitle("");
    setDescription("");
  }

  return (
    <div>
      <h1 className="text-5xl font-bold mb-10">Add Notes</h1>

      <form onSubmit={handleSubmit} className="flex flex-col gap-8">
        <input
          type="text"
          placeholder="Enter note heading"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="bg-transparent border-2 border-gray-400 rounded-xl px-5 py-4 text-xl focus:outline-none"
        />

        <textarea
          placeholder="Enter note description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="bg-transparent border-2 border-gray-400 rounded-xl px-5 py-4 text-xl h-48 resize-none focus:outline-none"
        />

        <button
          type="submit"
          className="bg-gray-200 text-black text-xl font-semibold py-4 rounded-xl hover:bg-gray-300 transition"
        >
          Add Note
        </button>
      </form>
    </div>
  );
}
