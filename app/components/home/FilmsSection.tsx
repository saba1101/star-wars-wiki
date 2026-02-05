import Link from "next/link";
import { FilmCard } from "../films/FilmCard";

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
          <FilmCard key={(film.url as string) ?? index} film={film} />
        ))}
      </div>
    </section>
  );
}
