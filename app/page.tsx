import Link from "next/link";
import { getSwapiData } from "./lib/swapi";
import { SWAPI } from "./lib/swapi-req-types";
import { SWAPI_EMOJI } from "./lib/swapi-req-types";

export default async function Home() {
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
        {Object.values(SWAPI)
          ?.filter((type) => type !== SWAPI.VEHICLES)
          .map((type) => {
            return (
              <Link
                key={type}
                href={`/${type}`}
                className="flex cursor-pointer flex-row items-center justify-center gap-6 rounded-xl bg-white/10 p-6 backdrop-brightness-50 transition-all duration-300 hover:backdrop-brightness-100"
              >
                <span className="text-5xl font-bold text-amber-300">
                  {SWAPI_EMOJI[type]}
                </span>
                <div>
                  <h2 className="text-2xl font-bold text-amber-300 capitalize">
                    {type}
                  </h2>
                  <p className="text-lg font-bold text-white/70">
                    {getSwapiData(type, null).then((data) => {
                      return <span>{data.length}</span>;
                    })}
                  </p>
                </div>
              </Link>
            );
          })}
      </div>
    </div>
  );
}
