export default function Loading() {
  return (
    <div className="fixed top-0 right-0 bottom-0 left-0 flex h-screen w-full items-center justify-center bg-black opacity-50">
      <div className="relative flex h-32 w-56 flex-col items-center justify-center">
        {/* Animated Starfield - Tailwind only */}
        <div className="pointer-events-none absolute top-8 left-3 h-2 w-2 animate-pulse rounded-full bg-amber-300 opacity-80" />
        <div className="pointer-events-none absolute top-4 left-40 h-1.5 w-1.5 animate-ping rounded-full bg-white opacity-70" />
        <div className="pointer-events-none absolute top-20 right-5 h-1.5 w-1.5 animate-pulse rounded-full bg-red-300 opacity-60 delay-200" />
        <div className="pointer-events-none absolute bottom-8 left-16 h-1.5 w-1.5 animate-ping rounded-full bg-amber-100 opacity-80 delay-500" />
        <div className="pointer-events-none absolute right-10 bottom-4 h-0.5 w-0.5 animate-pulse rounded-full bg-white opacity-20 delay-700" />
        <div className="pointer-events-none absolute top-3 right-8 h-1 w-1 animate-ping rounded-full bg-white opacity-60 delay-1000" />

        {/* STAR WARS WIKI - Animated Text with Tailwind only */}
        <div className="relative flex flex-col items-center">
          <span
            className={
              "animate-pulse text-4xl font-extrabold text-amber-300 select-none"
            }
          >
            STAR
          </span>
          <span
            className="animate-pulse text-3xl font-black text-red-100 delay-200 select-none"
            style={{ letterSpacing: "0.08em" }}
          >
            WARS
          </span>
          <span
            className="mt-2 animate-pulse text-2xl font-bold text-white delay-500 select-none"
            style={{ textShadow: "0 0 8px #fff2, 0 0 24px #ffff" }}
          >
            WIKI
          </span>
          <span className="mt-2 w-full animate-pulse rounded border-b-4 border-amber-300 opacity-80" />
        </div>
      </div>
    </div>
  );
}
