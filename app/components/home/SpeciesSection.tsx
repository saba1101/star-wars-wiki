import Link from "next/link";

type Species = Record<string, unknown>;

type SpeciesSectionProps = {
  species: Species[];
};

export function SpeciesSection({ species }: SpeciesSectionProps) {
  return (
    <section className="mt-16 flex w-full flex-col rounded-2xl bg-violet-300/5 p-8 backdrop-blur-xl">
      <div className="mb-8 flex flex-row items-start justify-between">
        <div>
          <h2 className="mb-2 text-4xl font-extrabold text-amber-300">
            Species
          </h2>
          <p className="max-w-lg text-lg text-white/70">
            The many sentient species of the galaxy—from Wookiees to Droids.
            Discover their traits and homeworlds.
          </p>
        </div>
        <Link
          href="/species"
          className="rounded-lg bg-amber-300/40 px-5 py-2 font-semibold text-amber-200 shadow transition-all hover:bg-amber-400/60"
        >
          See all
        </Link>
      </div>
      <div className="flex flex-row flex-wrap justify-start gap-6">
        {species.slice(0, 6).map((s, index) => (
          <div
            key={index}
            className="flex w-auto min-w-52 max-w-64 flex-col rounded-xl border border-white/25 bg-black/30 p-4 shadow-md backdrop-blur-sm transition-all duration-200 hover:border-amber-200/40 hover:bg-white/15"
          >
            <div className="mb-2 flex items-center gap-2">
              <span className="text-2xl">👽</span>
              <h3 className="truncate text-lg font-bold text-amber-300">
                {s.name as string}
              </h3>
            </div>
            <div className="space-y-1 text-sm text-white/70">
              <p>
                <span className="text-amber-200/90">Classification:</span>{" "}
                {(s.classification as string) ?? "—"}
              </p>
              <p>
                <span className="text-amber-200/90">Language:</span>{" "}
                {(s.language as string) ?? "—"}
              </p>
              {(s.average_height as string) && (
                <p>
                  <span className="text-amber-200/90">Avg height:</span>{" "}
                  {s.average_height as string} cm
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
