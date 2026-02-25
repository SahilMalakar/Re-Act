type SkeletonCardProps = {
  count?: number;
};

export function SkeletonLoader({ count = 8 }: SkeletonCardProps) {
  return (
    <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {Array.from({ length: count }).map((_, index) => (
        <div
          key={index}
          className="relative overflow-hidden rounded-2xl bg-zinc-900"
        >
          {/* Image Skeleton */}
          <div className="h-72 w-full bg-zinc-800 animate-pulse" />

          {/* Content Skeleton */}
          <div className="p-4 space-y-3">
            <div className="h-4 w-2/3 bg-zinc-800 rounded animate-pulse" />
            <div className="h-3 w-1/2 bg-zinc-800 rounded animate-pulse" />
            <div className="h-3 w-1/3 bg-zinc-800 rounded animate-pulse" />
          </div>

          {/* Shine Effect */}
          <div className="absolute inset-0 -translate-x-full bg-linear-to-r from-transparent via-white/5 to-transparent animate-[shimmer_1.5s_infinite]" />
        </div>
      ))}
    </div>
  );
}
