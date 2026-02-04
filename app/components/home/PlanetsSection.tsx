import Link from "next/link";
import Image from "next/image";

type Planet = Record<string, unknown>;

type PlanetsSectionProps = {
  planets: Planet[];
};

export function PlanetsSection({ planets }: PlanetsSectionProps) {
  return (
    <section className="mt-16 flex w-full flex-col rounded-2xl bg-emerald-300/5 p-8 backdrop-blur-xl">
      <div className="mb-8 flex flex-row items-start justify-between">
        <div>
          <h2 className="mb-2 text-4xl font-extrabold text-amber-300">
            Planets
          </h2>
          <p className="max-w-lg text-lg text-white/70">
            Planets are the large celestial bodies that orbit stars and are the
            primary constituents of the Star Wars universe—home to characters and
            stories across the galaxy.
          </p>
        </div>
        <Link
          href="/planets"
          className="rounded-lg bg-amber-300/40 px-5 py-2 font-semibold text-amber-200 shadow transition-all hover:bg-amber-400/60"
        >
          See all
        </Link>
      </div>
      <div className="flex flex-row flex-wrap justify-start gap-10">
        {planets.slice(0, 6).map((planet, index) => (
          <div
            key={index}
            className="flex w-auto max-w-80 flex-col rounded-2xl border border-white/25 bg-gradient-to-br from-black/80 to-indigo-900/40 p-0 shadow-lg transition-all duration-300 hover:scale-[1.02] hover:border-amber-200/60"
          >
            <div className="from-white-900/70 flex h-40 w-full items-center justify-center overflow-hidden rounded-t-2xl bg-gradient-to-b to-black/70 shadow-inner">
              <Image
                src="/images/default.png"
                alt={planet.name as string}
                width={300}
                height={200}
                className="object-cover object-top"
              />
            </div>
            <div className="flex flex-col px-6 py-5">
              <h3 className="mb-1 truncate text-xl font-bold text-amber-300">
                {planet.name as string}
              </h3>
              <span className="mb-2 font-mono text-sm text-white/60">
                Population: {planet.population as string}
              </span>
              <p className="line-clamp-2 text-sm text-white/70">
                {(planet.climate as string) ?? "A mysterious planet."}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
