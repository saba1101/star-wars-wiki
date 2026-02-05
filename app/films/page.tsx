import { getSwapiData } from "../lib/swapi";
import { SWAPI } from "../lib/swapi-req-types";
import { FilmCard } from "../components/films/FilmCard";

export default async function FilmsPage() {
  const films = await getSwapiData(SWAPI.FILMS, null);

  return (
    <div className="mx-auto mt-10 max-w-6xl">
      <h1 className="mb-2 text-4xl font-bold text-indigo-300">Films</h1>
      <p className="mb-10 text-white/60">
        Every Star Wars film. Click a card for full details and related
        characters, planets, and starships.
      </p>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {films.map((film, i) => (
          <FilmCard key={(film.url as string) ?? i} film={film} />
        ))}
      </div>
    </div>
  );
}
