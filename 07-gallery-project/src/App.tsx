import axios from "axios";
import { useEffect, useState } from "react";
import { ImageCard } from "./ImageCard";
import { SkeletonLoader } from "./Loader";

export type ImageType = {
  id: string;
  author: string;
  width: number;
  height: number;
  url: string;
  download_url: string;
};

export default function App() {
  const [data, setData] = useState<ImageType[]>([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);

  const getData = async () => {
    try {
      setLoading(true);
      const res = await axios.get(
        `https://picsum.photos/v2/list?page=${page}&limit=20`,
      );
      setData(res.data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, [page]);

  return (
    <div className="min-h-screen bg-linear-to-br from-zinc-950 via-black to-zinc-900 text-white px-8 py-10">
      {/* Header */}
      <div className="flex items-center justify-between mb-12">
        <h1 className="text-4xl font-bold tracking-tight">Premium Gallery</h1>

        <span className="text-sm text-gray-400">Page {page}</span>
      </div>

      {/* Grid */}
      <div className="transition-all duration-300">
        {loading ? (
          <SkeletonLoader count={12} />
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {data.map((image) => (
              <ImageCard key={image.id} image={image} />
            ))}
          </div>
        )}
      </div>

      {/* Pagination */}
      <div className="flex justify-center items-center gap-6 mt-14">
        <button
          disabled={page === 1 || loading}
          onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
          className="px-6 py-2 rounded-xl border border-white/20 bg-white/10 backdrop-blur-md hover:bg-white/20 transition disabled:opacity-40 disabled:cursor-not-allowed"
        >
          Prev
        </button>

        <button
          disabled={loading}
          onClick={() => setPage((prev) => prev + 1)}
          className="px-6 py-2 rounded-xl border border-white/20 bg-blue-500/20 hover:bg-blue-500/40 transition backdrop-blur-md"
        >
          Next
        </button>
      </div>
    </div>
  );
}
