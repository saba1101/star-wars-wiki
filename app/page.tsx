import Link from "next/link";
import { getSwapiData } from "./lib/swapi";
import { SWAPI } from "./lib/swapi-req-types";
import { SWAPI_EMOJI } from "./lib/swapi-req-types";
import Image from "next/image";
export default async function Home() {
  const types = Object.values(SWAPI);
  const entries = await Promise.all(
    types.map(async (type) => [type, await getSwapiData(type, null)] as const),
  );
  const localDataQuery = Object.fromEntries(entries) as Record<
    string,
    Awaited<ReturnType<typeof getSwapiData>>
  >;

  return (
    <div className="items-between mt-20 flex h-[500px] w-full flex-col justify-start gap-2">
      <h1 className="text-5xl font-bold text-amber-300">
        Star Wars API Explorer
      </h1>
      <p className="mt-4 max-w-md text-lg text-wrap text-white/50">
        Explore the Star Wars API and discover the characters, films, planets,
        starships, vehicles, and species of the Star Wars universe.
      </p>
      <div className="mt-26 flex items-center justify-between gap-4 rounded-2xl bg-amber-300/5 p-6 shadow-lg backdrop-blur-xl">
        {types
          .filter((type) => type !== SWAPI.VEHICLES)
          .map((type) => (
            <Link
              key={type}
              href={`/${type}`}
              className="flex cursor-pointer flex-row items-center justify-center gap-6 rounded-xl bg-white/10 p-6 backdrop-brightness-50 transition-all duration-300 hover:backdrop-brightness-100"
            >
              <span className="text-5xl font-bold text-amber-300">
                {SWAPI_EMOJI[type as keyof typeof SWAPI_EMOJI]}
              </span>
              <div>
                <h2 className="text-2xl font-bold text-amber-300 capitalize">
                  {type}
                </h2>
                <p className="text-lg font-bold text-white/70">
                  {localDataQuery[type].length}
                </p>
              </div>
            </Link>
          ))}
      </div>
      <div className="mt-16 flex w-full flex-col rounded-2xl bg-indigo-300/5 p-8 backdrop-blur-xl">
        <div className="mb-6 flex flex-row items-start justify-between">
          <div>
            <h2 className="mb-1 text-3xl font-bold text-amber-300">
              Star Wars: The First Movies
            </h2>
            <p className="max-w-lg text-base text-white/70">
              Relive the beginning of the galactic saga with the original Star
              Wars films. These classics introduced us to the Force, Jedi, Sith,
              and a universe of unforgettable characters.
            </p>
          </div>
          <Link
            href="/films"
            className="rounded-lg bg-amber-300/40 px-5 py-2 font-semibold text-amber-200 shadow transition-all hover:bg-amber-400/60"
          >
            See all
          </Link>
        </div>
        <div className="mt-15 flex flex-row flex-wrap justify-start gap-10">
          {localDataQuery.films.slice(0, 3).map((film, index) => (
            <div
              key={index}
              className="flex w-auto max-w-120 cursor-pointer flex-col rounded-xl border border-white/25 bg-black/30 p-3 shadow-md backdrop-blur-sm transition-all duration-200 hover:bg-white/20"
              style={{
                boxShadow: "0 2px 8px 0 rgba(31,38,135,0.12)",
              }}
            >
              <div className="mb-3 flex items-center">
                <div className="mr-3 flex h-12 w-12 items-center justify-center rounded-md bg-white/20">
                  <span className="text-2xl text-amber-300/70">🎬</span>
                </div>
                <div>
                  <h3 className="truncate text-lg leading-tight font-bold text-amber-300">
                    {film.title as string}
                  </h3>
                  <span className="font-mono text-xs text-white/50">
                    {film.release_date as string}
                  </span>
                </div>
              </div>
              <p className="mb-2 line-clamp-2 text-xs text-white/70 italic">
                {(film.opening_crawl as string)?.split("\n")[0]}
              </p>
              <div className="mb-1 flex flex-row items-center gap-2">
                <span className="text-xs font-medium text-amber-200">
                  Director:
                </span>
                <span className="truncate text-xs text-white/60">
                  {film.director as string}
                </span>
              </div>
              <div className="flex flex-row items-center gap-2">
                <span className="text-xs font-medium text-amber-200">
                  Producer:
                </span>
                <span className="truncate text-xs text-white/50">
                  {film.producer as string}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-16 flex w-full flex-col rounded-2xl bg-cyan-300/5 p-8 backdrop-blur-xl">
        <div className="mb-8 flex flex-row items-start justify-between">
          <div>
            <h2 className="mb-2 text-4xl font-extrabold text-amber-300">
              Star Wars: Characters
            </h2>
            <p className="max-w-lg text-lg text-white/70">
              Discover quick overviews of key Star Wars characters. Dive deeper
              into their stories and background!
            </p>
          </div>
          <Link
            href="/people"
            className="rounded-lg bg-amber-300/40 px-5 py-2 font-semibold text-amber-200 shadow transition-all hover:bg-amber-400/60"
          >
            See all
          </Link>
        </div>
        <div className="flex flex-row flex-wrap justify-center gap-8">
          {localDataQuery.people.slice(0, 4).map((person, index) => (
            <div
              key={index}
              className="group relative flex w-76 max-w-full flex-col rounded-2xl border border-white/25 bg-gradient-to-br from-black/80 to-indigo-900/40 p-0 shadow-lg transition-all duration-300 hover:scale-[1.025] hover:border-amber-200/60 hover:bg-black/60"
              style={{
                minHeight: "320px",
              }}
            >
              {/* Cover placeholder */}
              <div className="from-white-900/70 flex h-48 w-full items-center justify-center overflow-hidden rounded-t-2xl bg-gradient-to-b to-black/70 shadow-inner">
                <Image
                  src={
                    (person?.name as string).includes("Luke")
                      ? "/images/luke.jpg"
                      : (person?.name as string).includes("Vader")
                        ? "/images/vader.jpg"
                        : "/images/default.png"
                  }
                  alt={person.name as string}
                  width={300}
                  height={200}
                  className="rounded-full object-cover object-top"
                />
              </div>
              <div className="flex flex-col px-6 py-6">
                <h3 className="mb-1 truncate text-2xl font-bold text-amber-300">
                  {person.name as string}
                </h3>
                <span className="mb-2 font-mono text-base text-white/60">
                  Birth: {person.birth_year as string}
                </span>
                <p className="mb-3 line-clamp-3 text-base text-white/80 italic">
                  {(person.description as string)?.split("\n")[0] ??
                    "A mysterious figure from the galaxy."}
                </p>
                <div className="mt-auto flex flex-row flex-wrap gap-x-6 gap-y-2">
                  <div className="flex flex-row items-center gap-1">
                    <span className="text-sm font-semibold text-amber-200">
                      Gender:
                    </span>
                    <span className="text-sm text-white/70">
                      {person.gender as string}
                    </span>
                  </div>
                  <div className="flex flex-row items-center gap-1">
                    <span className="text-sm font-semibold text-amber-200">
                      Height:
                    </span>
                    <span className="text-sm text-white/60">
                      {person.height as string} cm
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
