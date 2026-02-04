export default function Home() {
  return (
    <div className="items-between mt-20 flex h-[500px] w-full flex-col justify-start gap-2">
      <h1 className="text-5xl font-bold text-amber-300">
        Star Wars API Explorer
      </h1>
      <p className="mt-4 max-w-md text-lg text-wrap text-white/50">
        Explore the Star Wars API and discover the characters, films, planets,
        starships, vehicles, and species of the Star Wars universe.
      </p>
      <div className="flex items-center justify-between gap-4"></div>
    </div>
  );
}
