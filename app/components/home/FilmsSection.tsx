import Link from "next/link";

type Film = Record<string, unknown>;

type FilmsSectionProps = {
  films: Film[];
};

export function FilmsSection({ films }: FilmsSectionProps) {
  return (
    <section className="mt-16 flex w-full flex-col rounded-2xl bg-indigo-300/5 p-8 backdrop-blur-xl">
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
      <div className="mt-4 flex flex-row flex-wrap justify-start gap-10">
        {films.slice(0, 3).map((film, index) => (
          <div
            key={index}
            className="flex w-auto max-w-120 cursor-pointer flex-col rounded-xl border border-white/25 bg-black/30 p-3 shadow-md backdrop-blur-sm transition-all duration-200 hover:bg-white/20"
            style={{ boxShadow: "0 2px 8px 0 rgba(31,38,135,0.12)" }}
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
    </section>
  );
}
