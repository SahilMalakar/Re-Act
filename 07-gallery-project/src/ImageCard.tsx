import type { ImageType } from "./App";

type ImageCardProps = {
  image: ImageType;
};

export function ImageCard({ image }: ImageCardProps) {
  const aspectRatio = (image.width / image.height).toFixed(2);

  return (
    <div className="group relative rounded-2xl overflow-hidden bg-zinc-900 shadow-xl hover:shadow-2xl transition-all duration-500">
      {/* Image */}
      <img
        src={image.download_url}
        alt={image.author}
        className="w-full h-72 object-cover group-hover:scale-105 transition duration-500"
      />

      {/* ID Badge */}
      <span className="absolute top-3 left-3 bg-black/70 text-xs px-3 py-1 rounded-full backdrop-blur">
        ID: {image.id}
      </span>

      {/* Overlay */}
      <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition duration-300" />

      {/* Info Panel */}
      <div className="absolute bottom-0 p-4 text-white w-full translate-y-6 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
        <h2 className="font-semibold text-lg">{image.author}</h2>

        <p className="text-xs text-gray-300 mt-1">
          {image.width} × {image.height} px
        </p>

        <p className="text-xs text-gray-400">Aspect Ratio: {aspectRatio}</p>

        <a
          href={image.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-2 text-sm underline hover:text-blue-400"
        >
          View on Unsplash →
        </a>
      </div>
    </div>
  );
}
