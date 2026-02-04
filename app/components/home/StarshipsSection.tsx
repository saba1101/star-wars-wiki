import Link from "next/link";

type Starship = Record<string, unknown>;

type StarshipsSectionProps = {
  starships: Starship[];
};

export function StarshipsSection({ starships }: StarshipsSectionProps) {
  return (
    <section className="mt-16 flex w-full flex-col rounded-2xl bg-sky-300/5 p-8 backdrop-blur-xl">
      <div className="mb-8 flex flex-row items-start justify-between">
        <div>
          <h2 className="mb-2 text-4xl font-extrabold text-amber-300">
            Starships
          </h2>
          <p className="max-w-lg text-lg text-white/70">
            From X-wings to Star Destroyers—explore the iconic vessels that
            define travel and battle in the Star Wars galaxy.
          </p>
        </div>
        <Link
          href="/starships"
          className="rounded-lg bg-amber-300/40 px-5 py-2 font-semibold text-amber-200 shadow transition-all hover:bg-amber-400/60"
        >
          See all
        </Link>
      </div>
      <div className="flex flex-row flex-wrap justify-start gap-6">
        {starships.slice(0, 4).map((starship, index) => (
          <div
            key={index}
            className="flex w-auto max-w-80 min-w-64 flex-col rounded-xl border border-white/25 bg-black/30 p-5 shadow-md backdrop-blur-sm transition-all duration-200 hover:border-amber-200/40 hover:bg-white/15"
          >
            <div className="mb-3 flex items-center gap-3">
              <span className="text-3xl">🚀</span>
              <div>
                <h3 className="w-60 truncate text-xl font-bold text-amber-300">
                  {starship.name as string}
                </h3>
                <span className="text-sm text-white/50">
                  {starship.model as string}
                </span>
              </div>
            </div>
            <div className="space-y-1 text-sm">
              <div className="flex justify-between gap-2">
                <span className="text-amber-200/90">Manufacturer</span>
                <span className="truncate text-white/70">
                  {starship.manufacturer as string}
                </span>
              </div>
              <div className="flex justify-between gap-2">
                <span className="text-amber-200/90">Length</span>
                <span className="text-white/70">
                  {(starship.length as string) ?? "—"} m
                </span>
              </div>
              <div className="flex justify-between gap-2">
                <span className="text-amber-200/90">Crew</span>
                <span className="text-white/70">{starship.crew as string}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
