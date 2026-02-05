import { getSwapiData } from "../lib/swapi";
import { SWAPI } from "../lib/swapi-req-types";
import { StarshipCard } from "../components/starships/StarshipCard";

export default async function StarshipsPage() {
  const starships = await getSwapiData(SWAPI.STARSHIPS, null);

  return (
    <div className="mx-auto mt-10 max-w-6xl">
      <h1 className="mb-2 text-4xl font-bold text-sky-300">Starships</h1>
      <p className="mb-10 text-white/60">
        Every starship in the API. Click a card for full specs and related
        films and pilots.
      </p>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {starships.map((starship, i) => (
          <StarshipCard key={(starship.url as string) ?? i} starship={starship} />
        ))}
      </div>
    </div>
  );
}
