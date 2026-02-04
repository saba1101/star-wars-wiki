import Image from "next/image";

export default function Home() {
  return (
    <div className="w-full mt-20 h-[500px] flex items-between justify-start flex-col gap-2">
      <h1 className="font-bold text-5xl text-amber-300">Star Wars API Explorer</h1>
      <p className="text-white/50 text-wrap mt-4 max-w-md text-lg">Explore the Star Wars API and discover the characters, films, planets, starships, vehicles, and species of the Star Wars universe.</p>
      <div className="flex items-center justify-between gap-4">

      </div>
    </div>
  );
}
