import type { Note } from "../App";

type RecentNotesProps = {
  notes: Note[];
  onDelete: (index: number) => void;
};

export default function RecentNotes({ notes, onDelete }: RecentNotesProps) {
  return (
    <div>
      <h1 className="text-5xl font-bold mb-10">Recent Notes</h1>

      <div className="flex gap-8 flex-wrap">
        {notes.map((note, index) => (
          <div
            key={index}
            className="bg-gray-200 text-black w-64 h-96 rounded-3xl p-6 relative"
          >
            <h2 className="text-xl font-bold mb-4">{note.title}</h2>
            <p className="text-sm">{note.description}</p>

            <button
              onClick={() => onDelete(index)}
              className="absolute bottom-4 right-4 bg-red-500 text-white px-3 py-1 rounded-lg"
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
