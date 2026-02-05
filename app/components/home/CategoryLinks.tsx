import Link from "next/link";
import { SWAPI, SWAPI_EMOJI } from "../../lib/swapi-req-types";

type CategoryLinksProps = {
  types: string[];
  counts: Record<string, number>;
};

export function CategoryLinks({ types, counts }: CategoryLinksProps) {
  return (
    <div className="mt-8 flex flex-wrap items-center justify-between gap-4 rounded-2xl bg-amber-300/5 p-6 shadow-lg backdrop-blur-xl">
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
              <p className="text-lg font-bold text-white/70">{counts[type]}</p>
            </div>
          </Link>
        ))}
    </div>
  );
}
