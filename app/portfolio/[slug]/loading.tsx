export default function ProjectLoading() {
  return (
    <div className="animate-pulse">
      {/* Hero skeleton */}
      <div className="py-16 lg:py-24 border-b border-[#1c1c1c]/10 dark:border-white/10">
        <div className="h-3 w-24 rounded-full bg-[#1c1c1c]/10 dark:bg-white/10 mb-6" />
        <div className="h-10 w-2/3 rounded-2xl bg-[#1c1c1c]/10 dark:bg-white/10 mb-4" />
        <div className="h-5 w-1/2 rounded-xl bg-[#1c1c1c]/8 dark:bg-white/8 mb-8" />
        <div className="flex gap-2 flex-wrap mb-8">
          {Array.from({ length: 5 }).map((_, i) => (
            <div key={i} className="h-6 w-20 rounded-full bg-[#1c1c1c]/8 dark:bg-white/8" />
          ))}
        </div>
        <div className="flex gap-3">
          <div className="h-11 w-36 rounded-2xl bg-[#1c1c1c]/10 dark:bg-white/10" />
          <div className="h-11 w-36 rounded-2xl bg-[#1c1c1c]/6 dark:bg-white/6" />
        </div>
      </div>

      {/* Images skeleton */}
      <div className="py-12">
        <div className="aspect-video w-full rounded-3xl bg-[#1c1c1c]/8 dark:bg-white/8" />
      </div>

      {/* Content sections */}
      <div className="py-12 space-y-4">
        <div className="h-3 w-20 rounded-full bg-[#1c1c1c]/8 dark:bg-white/8" />
        <div className="h-7 w-48 rounded-xl bg-[#1c1c1c]/10 dark:bg-white/10" />
        <div className="space-y-2">
          <div className="h-4 w-full rounded-lg bg-[#1c1c1c]/6 dark:bg-white/6" />
          <div className="h-4 w-5/6 rounded-lg bg-[#1c1c1c]/6 dark:bg-white/6" />
          <div className="h-4 w-4/6 rounded-lg bg-[#1c1c1c]/6 dark:bg-white/6" />
        </div>
      </div>
    </div>
  );
}
